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
    var core_1, http_1, userType_1, constants_1, AdminAnnouncementService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
            AdminAnnouncementService = class AdminAnnouncementService {
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
                            UserType: userType_1.UserType.Admin
                        }
                    ];
                    this.paidInvoices = [
                        {
                            Id: 1,
                            Date: new Date(),
                            User: this.users[0],
                            Amount: 2000,
                            IsPaid: true
                        },
                        {
                            Id: 2,
                            Date: new Date(),
                            User: this.users[2],
                            Amount: 3500,
                            IsPaid: true
                        },
                        {
                            Id: 3,
                            Date: new Date(),
                            User: this.users[0],
                            Amount: 4000,
                            IsPaid: true
                        },
                        {
                            Id: 4,
                            Date: new Date(),
                            User: this.users[2],
                            Amount: 1000,
                            IsPaid: true
                        },
                        {
                            Id: 5,
                            Date: new Date(),
                            User: this.users[0],
                            Amount: 2500,
                            IsPaid: true
                        },
                        {
                            Id: 6,
                            Date: new Date(),
                            User: this.users[0],
                            Amount: 100,
                            IsPaid: true
                        }
                    ];
                    this.unpaidInvoices = [
                        {
                            Id: 1,
                            Date: new Date(),
                            User: this.users[0],
                            Amount: 12000,
                            IsPaid: false
                        },
                        {
                            Id: 2,
                            Date: new Date(),
                            User: this.users[2],
                            Amount: 5000,
                            IsPaid: false
                        },
                        {
                            Id: 3,
                            Date: new Date(),
                            User: this.users[0],
                            Amount: 3000,
                            IsPaid: false
                        },
                        {
                            Id: 4,
                            Date: new Date(),
                            User: this.users[2],
                            Amount: 4500,
                            IsPaid: false
                        },
                        {
                            Id: 5,
                            Date: new Date(),
                            User: this.users[0],
                            Amount: 10000,
                            IsPaid: false
                        },
                        {
                            Id: 6,
                            Date: new Date(),
                            User: this.users[0],
                            Amount: 100,
                            IsPaid: false
                        }
                    ];
                }
                GetAllPaidInvoices() {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'Invoice/GetPaid')
                        .map(res => res.json()).toPromise();
                    //return this.paidInvoices;
                }
                GetAllUnpaidInvoices() {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'Invoice/GetUnpaid')
                        .map(res => res.json()).toPromise();
                    // return this.unpaidInvoices;
                }
            };
            AdminAnnouncementService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], AdminAnnouncementService);
            exports_1("AdminAnnouncementService", AdminAnnouncementService);
        }
    };
});
//# sourceMappingURL=admin-announcement.service.js.map