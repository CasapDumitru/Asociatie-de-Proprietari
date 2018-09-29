System.register(["@angular/core", "./admin-administrative-charges.service"], function (exports_1, context_1) {
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
    var core_1, admin_administrative_charges_service_1, AdminAdministrativeChargesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_administrative_charges_service_1_1) {
                admin_administrative_charges_service_1 = admin_administrative_charges_service_1_1;
            }
        ],
        execute: function () {
            AdminAdministrativeChargesComponent = class AdminAdministrativeChargesComponent {
                constructor(administrativeService) {
                    this.administrativeService = administrativeService;
                    this.newTax = {
                        Id: 0,
                        Name: ' ',
                        Price: 0
                    };
                    this.ready = false;
                }
                GetAllTaxes() {
                    this.administrativeService.GetAllTaxes().then(taxes => {
                        this.taxes = taxes;
                        this.ready = true;
                    }).catch(err => {
                        console.log(err);
                    });
                }
                AddTax() {
                    this.administrativeService.AddTax(this.newTax).then(tax => {
                        console.log(tax);
                        this.newTax.Name = '';
                        this.newTax.Price = 0;
                        this.taxes.push(tax);
                    }).catch(err => {
                        console.log(err);
                    });
                }
                ngOnInit() {
                    console.log('da');
                    this.GetAllTaxes();
                }
                DeleteTax(tax, index) {
                    if (confirm("Are you sure to delete this?")) {
                        this.administrativeService.DeleteTax(tax.Id).then(tax => {
                            this.taxes.splice(index, 1);
                        }).catch(err => {
                            console.log(err);
                        });
                    }
                }
            };
            AdminAdministrativeChargesComponent = __decorate([
                core_1.Component({
                    selector: 'admin-administrative-charges',
                    templateUrl: "app/admin-administrative-charges/admin-administrative-charges.component.html",
                    styleUrls: ["app/admin-administrative-charges/admin-administrative-charges.style.css"],
                    providers: [admin_administrative_charges_service_1.AdminAdministrativeService]
                }),
                __metadata("design:paramtypes", [admin_administrative_charges_service_1.AdminAdministrativeService])
            ], AdminAdministrativeChargesComponent);
            exports_1("AdminAdministrativeChargesComponent", AdminAdministrativeChargesComponent);
        }
    };
});
//# sourceMappingURL=admin-administrative-charges.component.js.map