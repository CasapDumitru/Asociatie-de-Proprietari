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
    var core_1, http_1, http_2, userType_1, constants_1, TenantSmartHomeService;
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
            TenantSmartHomeService = class TenantSmartHomeService {
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
                            UserType: userType_1.UserType.Tenant
                        },
                        {
                            Id: 3,
                            FirstName: "ccccc",
                            LastName: "ccccc",
                            UserName: "ccccc",
                            Email: "ccccc",
                            Password: "ccccc",
                            UserType: userType_1.UserType.Tenant
                        },
                        {
                            Id: 4,
                            FirstName: "ddddd",
                            LastName: "ddddd",
                            UserName: "ddddd",
                            Email: "ddddd",
                            Password: "ddddd",
                            UserType: userType_1.UserType.Tenant
                        }
                    ];
                    this.smartHome = {
                        Id: 1,
                        User: this.users[0],
                        IsActivated: false,
                        Ip: '193.129.12.2'
                    };
                    this.notifiedUsers = [
                        {
                            Id: 1,
                            Date: new Date(),
                            User: this.users[1],
                            SmartHome: this.smartHome
                        },
                        {
                            Id: 2,
                            Date: new Date(),
                            User: this.users[3],
                            SmartHome: this.smartHome
                        }
                    ];
                }
                CreateSmartHome(smartHome) {
                    console.log(smartHome);
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(smartHome);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + 'SmartHome', body, options).map(res => res.json()).toPromise();
                    //return smartHome;
                }
                GetSmartHome(userId) {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'SmartHome/' + userId)
                        .map(res => res.json()).toPromise();
                }
                DeleteSmartHome(smartHomeId) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete(constants_1.Constants.API_ENDPOINT + 'SmartHome/' + smartHomeId, options)
                        .map(res => res.json()).toPromise();
                }
                EditSmartHome(smartHome) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(smartHome);
                    return this.http.put(constants_1.Constants.API_ENDPOINT + "SmartHome/" + smartHome.Id, body, options).map(res => res.json()).toPromise();
                }
                GetUser(id) {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'User/' + id)
                        .map(res => res.json()).toPromise();
                }
                GetAllTenants() {
                    return this.users;
                }
                GetAllNotifiedTenants() {
                    return this.notifiedUsers;
                }
                AddNotifiedTenant(notif) {
                    return notif;
                }
                DeleteNotifiedTenant(notifId) {
                }
            };
            TenantSmartHomeService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], TenantSmartHomeService);
            exports_1("TenantSmartHomeService", TenantSmartHomeService);
        }
    };
});
//# sourceMappingURL=tenant-smart-home.service.js.map