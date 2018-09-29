System.register(["@angular/core", "./tenant-smart-home.service"], function (exports_1, context_1) {
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
    var core_1, tenant_smart_home_service_1, TenantSmartHomeComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tenant_smart_home_service_1_1) {
                tenant_smart_home_service_1 = tenant_smart_home_service_1_1;
            }
        ],
        execute: function () {
            TenantSmartHomeComponent = class TenantSmartHomeComponent {
                constructor(smartHomeService) {
                    this.smartHomeService = smartHomeService;
                    this.notifUsers = [];
                    this.ip = "";
                    this.showConfigure = false;
                    this.ready = true;
                }
                CreateSmartHome() {
                    this.smartHome = {
                        Id: 0,
                        Ip: this.ip,
                        User: this.currentUser,
                        IsActivated: false
                    };
                    console.log(this.smartHome);
                    this.smartHomeService.CreateSmartHome(this.smartHome).then(smHome => {
                        console.log(smHome);
                        this.smartHome = smHome;
                        console.log(this.smartHome);
                        this.GetNotificatedUsers();
                        this.GetTenants();
                    }).catch(er => {
                        console.log(er);
                    });
                    //console.log(this.ip);
                }
                Activate(value) {
                    console.log(value);
                    this.smartHome.IsActivated = value;
                    this.smartHomeService.EditSmartHome(this.smartHome);
                }
                Delete() {
                    if (confirm("Are you sure to delete the smart home?")) {
                        this.smartHomeService.DeleteSmartHome(this.smartHome.Id).then(sm => {
                            this.smartHome = null;
                        }).catch(er => {
                            console.log(er);
                        });
                        //this.smartHome = null;
                    }
                }
                Configure() {
                    this.showConfigure = true;
                }
                GetNotificatedUsers() {
                    this.notifiedTenants = this.smartHomeService.GetAllNotifiedTenants();
                }
                IsNotified(userId) {
                    var val = false;
                    this.notifiedTenants.forEach((t) => {
                        if (t.User.Id == userId) {
                            console.log(t.User.Id);
                            val = true;
                        }
                    });
                    return val;
                }
                AddOrDelete(user, val) {
                    var v = true;
                    for (var i = 0; i < this.notifiedTenants.length; i++) {
                        if (this.notifiedTenants[i].User.Id == user.Id) {
                            v = false;
                            if (val == false) {
                                this.smartHomeService.DeleteNotifiedTenant(this.notifiedTenants[i].Id);
                                this.notifiedTenants.splice(i, 1);
                            }
                        }
                    }
                    if (v && val) {
                        var notTen = {
                            Id: 0,
                            User: user,
                            Date: new Date(),
                            SmartHome: this.smartHome
                        };
                        var notif = this.smartHomeService.AddNotifiedTenant(notTen);
                        this.notifiedTenants.push(notif);
                    }
                }
                GetTenants() {
                    this.tenants = this.smartHomeService.GetAllTenants();
                    this.tenants.forEach((t) => {
                        var n = {
                            User: t,
                            IsActivated: false
                        };
                        if (this.IsNotified(t.Id))
                            n.IsActivated = true;
                        this.notifUsers.push(n);
                    });
                }
                ActivateNotif(index, value) {
                    this.notifUsers[index].IsActivated = value;
                }
                GiveUp() {
                    if (confirm("Are you sure to give up? All changes will not be saved")) {
                        this.notifUsers = [];
                        this.GetTenants();
                        this.ip = this.smartHome.Ip;
                        this.showConfigure = false;
                    }
                }
                ApplyChanges() {
                    if (confirm("Are you sure to apply all changes?")) {
                        if (this.ip != this.smartHome.Ip) {
                            this.smartHome.Ip = this.ip;
                            this.smartHomeService.EditSmartHome(this.smartHome).then(smHome => {
                            }).catch(er => {
                                console.log(er);
                            });
                        }
                        this.notifUsers.forEach((t) => {
                            this.AddOrDelete(t.User, t.IsActivated);
                        });
                        this.showConfigure = false;
                    }
                }
                ngOnInit() {
                    var userId = +localStorage.getItem("id_token");
                    this.smartHomeService.GetUser(userId).then(u => {
                        console.log(u);
                        this.currentUser = u;
                        this.smartHomeService.GetSmartHome(userId).then(smHome => {
                            //this.smartHome.User = this.currentUser;
                            this.smartHome = smHome;
                        }).catch(er => {
                            console.log(er);
                        });
                    }).catch(er => {
                        console.log(er);
                    });
                    if (this.smartHome != null) {
                        this.ip = this.smartHome.Ip;
                        this.GetNotificatedUsers();
                        this.GetTenants();
                    }
                }
            };
            TenantSmartHomeComponent = __decorate([
                core_1.Component({
                    selector: 'tenant-smart-home',
                    templateUrl: "app/tenant-smart-home/tenant-smart-home.component.html",
                    styleUrls: ["app/tenant-smart-home/tenant-smart-home.style.css"],
                    providers: [tenant_smart_home_service_1.TenantSmartHomeService]
                }),
                __metadata("design:paramtypes", [tenant_smart_home_service_1.TenantSmartHomeService])
            ], TenantSmartHomeComponent);
            exports_1("TenantSmartHomeComponent", TenantSmartHomeComponent);
        }
    };
});
//# sourceMappingURL=tenant-smart-home.component.js.map