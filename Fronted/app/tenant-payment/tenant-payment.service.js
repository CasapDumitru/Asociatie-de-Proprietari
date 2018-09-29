System.register(["@angular/core", "@angular/http", "rxjs/Rx", "../interfaces/userType", "./../shared/constants"], function (exports_1, context_1) {
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
    var core_1, http_1, http_2, userType_1, constants_1, TenantPaymentService;
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
            TenantPaymentService = class TenantPaymentService {
                constructor(http) {
                    this.http = http;
                    this.user = {
                        Id: 1,
                        FirstName: "aaaaa",
                        LastName: "aaaaa",
                        UserName: "aaaaa",
                        Email: "aaaaa",
                        Password: "aaaaa",
                        UserType: userType_1.UserType.Tenant
                    };
                    this.creditCard = {
                        Id: 1,
                        CardNumber: 'aaa-aaa',
                        User: this.user
                    };
                    this.unpaidInvoices = [
                        {
                            Id: 1,
                            Date: new Date(),
                            User: this.user,
                            Amount: 12000,
                            IsPaid: false
                        },
                        {
                            Id: 2,
                            Date: new Date(),
                            User: this.user,
                            Amount: 5000,
                            IsPaid: false
                        },
                        {
                            Id: 3,
                            Date: new Date(),
                            User: this.user,
                            Amount: 3000,
                            IsPaid: false
                        },
                        {
                            Id: 4,
                            Date: new Date(),
                            User: this.user,
                            Amount: 4500,
                            IsPaid: false
                        },
                        {
                            Id: 5,
                            Date: new Date(),
                            User: this.user,
                            Amount: 10000,
                            IsPaid: false
                        },
                        {
                            Id: 6,
                            Date: new Date(),
                            User: this.user,
                            Amount: 100,
                            IsPaid: false
                        }
                    ];
                }
                GetAllUnpaidInvoicesOfTheAUser(id) {
                    //return this.unpaidInvoices;
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'Invoice/GetUnpaid')
                        .map(res => res.json()).toPromise();
                }
                DeleteInvoice(id) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete(constants_1.Constants.API_ENDPOINT + 'Invoice/' + id, options)
                        .map(res => res.json()).toPromise();
                }
                ExistsCard(cardNumber) {
                    return cardNumber === this.creditCard.CardNumber ? true : false;
                }
            };
            TenantPaymentService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], TenantPaymentService);
            exports_1("TenantPaymentService", TenantPaymentService);
        }
    };
});
//# sourceMappingURL=tenant-payment.service.js.map