System.register(["@angular/core", "@angular/http", "rxjs/Rx", "./../interfaces/userType", "./../shared/constants"], function (exports_1, context_1) {
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
    var core_1, http_1, http_2, userType_1, constants_1, StartPageService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {
            },
            function (userType_1_1) {
                userType_1 = userType_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            StartPageService = class StartPageService {
                constructor(http) {
                    this.http = http;
                    this.users = [
                        {
                            Id: 1,
                            FirstName: "aaaaa",
                            LastName: "aaaaa",
                            UserName: "aaaaa",
                            Email: "aaaaa",
                            Password: "aaaaa",
                            UserType: userType_1.UserType.Tenant
                        },
                        {
                            Id: 2,
                            FirstName: "bbbbb",
                            LastName: "bbbbb",
                            UserName: "bbbbb",
                            Email: "bbbbb",
                            Password: "bbbbb",
                            UserType: userType_1.UserType.Admin
                        }
                    ];
                }
                Login(userName, password) {
                    let user = {
                        Id: null,
                        FirstName: "",
                        LastName: "",
                        UserName: userName,
                        Email: "",
                        Password: password,
                        UserType: userType_1.UserType.Admin
                    };
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(user);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + 'Login', body, options).map(res => res.json()).toPromise();
                    /*var user = null;
                    this.users.forEach((u) => {
                        if(u.UserName == userName && u.Password == password) {
                            user = u;
                        }
                    });
                    return user;*/
                }
                Register(user) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(user);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + 'Login/Register', body, options).map(res => res.json()).toPromise();
                    /*this.users.push(user);
                    return user;*/
                }
            };
            StartPageService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], StartPageService);
            exports_1("StartPageService", StartPageService);
        }
    };
});
//# sourceMappingURL=start-page-service.js.map