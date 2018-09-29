System.register(["@angular/core", "@angular/http", "rxjs/Rx", "./../shared/constants"], function (exports_1, context_1) {
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
    var core_1, http_1, http_2, constants_1, AdminAdministrativeService;
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
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            AdminAdministrativeService = class AdminAdministrativeService {
                constructor(http) {
                    this.http = http;
                    this.taxes = [
                        {
                            Id: 1,
                            Name: 'Tax 1',
                            Price: 20
                        },
                        {
                            Id: 2,
                            Name: 'Tax 2',
                            Price: 100
                        },
                        {
                            Id: 3,
                            Name: 'Tax 3',
                            Price: 120
                        },
                        {
                            Id: 4,
                            Name: 'Tax 4',
                            Price: 50
                        },
                        {
                            Id: 5,
                            Name: 'Tax 5',
                            Price: 50
                        }
                    ];
                }
                GetAllTaxes() {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'Tax')
                        .map(res => res.json()).toPromise();
                    // return this.taxes;
                }
                AddTax(tax) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(tax);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + 'Tax', body, options).map(res => res.json()).toPromise();
                    /*let copy = Object.assign({}, tax);
                    this.taxes.push(copy);
                    return copy;*/
                }
                DeleteTax(id) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete(constants_1.Constants.API_ENDPOINT + 'Tax/' + id, options)
                        .map(res => res.json()).toPromise();
                }
            };
            AdminAdministrativeService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], AdminAdministrativeService);
            exports_1("AdminAdministrativeService", AdminAdministrativeService);
        }
    };
});
//# sourceMappingURL=admin-administrative-charges.service.js.map