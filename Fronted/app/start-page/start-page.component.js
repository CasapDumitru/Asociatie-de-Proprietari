System.register(["@angular/core", "@angular/router", "./../interfaces/userType", "./start-page-service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, userType_1, start_page_service_1, StartPageComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (userType_1_1) {
                userType_1 = userType_1_1;
            },
            function (start_page_service_1_1) {
                start_page_service_1 = start_page_service_1_1;
            }
        ],
        execute: function () {
            StartPageComponent = class StartPageComponent {
                constructor(startPageService, router) {
                    this.startPageService = startPageService;
                    this.router = router;
                    this.formLogin = true;
                    this.registerUser = {
                        Id: 0,
                        FirstName: "",
                        LastName: "",
                        UserName: "",
                        Email: "",
                        Password: "",
                        UserType: userType_1.UserType.Tenant
                    };
                    this.userTypes = userType_1.UserType;
                    this.option = Object.keys(this.userTypes).filter(Number);
                }
                LoginForm() {
                    this.formLogin = true;
                }
                RegisterForm() {
                    this.formLogin = false;
                }
                GoToHome(user) {
                    localStorage.setItem('id_token', user.Id.toString());
                    if (user.UserType == userType_1.UserType.Tenant)
                        this.router.navigate(['tenantHome']);
                    else
                        this.router.navigate(['adminHome']);
                }
                Login() {
                    this.startPageService.Login(this.loginUserName, this.loginPassword).then(user => {
                        if (user == null) {
                            this.loginMessage = "Invalid username or password.Try Again!";
                        }
                        else {
                            this.loginMessage = "";
                            this.GoToHome(user);
                        }
                        console.log(user);
                    }).catch(er => {
                        console.log(er);
                    });
                }
                Register() {
                    if (this.registerUser.Password == this.confirmPassword) {
                        this.startPageService.Register(this.registerUser).then(u => {
                            this.GoToHome(u);
                            this.registerMessage = "";
                        }).catch(er => {
                            console.log(er);
                        });
                    }
                    else {
                        this.registerMessage = "Passwords do not coincide!";
                    }
                }
            };
            StartPageComponent = __decorate([
                core_1.Component({
                    selector: "start",
                    templateUrl: 'app/start-page/start-page.component.html',
                    styleUrls: ['app/start-page/start-page.style.css'],
                    providers: [start_page_service_1.StartPageService]
                }),
                __metadata("design:paramtypes", [start_page_service_1.StartPageService, router_1.Router])
            ], StartPageComponent);
            exports_1("StartPageComponent", StartPageComponent);
        }
    };
});
//# sourceMappingURL=start-page.component.js.map