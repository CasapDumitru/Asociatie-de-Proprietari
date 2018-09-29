System.register(["@angular/core", "./tenant-payment.service", "../interfaces/userType"], function (exports_1, context_1) {
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
    var core_1, tenant_payment_service_1, userType_1, TenantPaymentComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tenant_payment_service_1_1) {
                tenant_payment_service_1 = tenant_payment_service_1_1;
            },
            function (userType_1_1) {
                userType_1 = userType_1_1;
            }
        ],
        execute: function () {
            TenantPaymentComponent = class TenantPaymentComponent {
                constructor(paymentService) {
                    this.paymentService = paymentService;
                    this.user = {
                        Id: 1,
                        FirstName: "aaaaa",
                        LastName: "aaaaa",
                        UserName: "aaaaa",
                        Email: "aaaaa",
                        Password: "aaaaa",
                        UserType: userType_1.UserType.Tenant
                    };
                    this.showPayment = false;
                    this.showError = false;
                    this.selectedIndex = -1;
                    this.ready = true;
                }
                PayInvoice() {
                    if (this.paymentService.ExistsCard(this.cardNumber)) {
                        this.showPayment = false;
                        this.showError = false;
                        this.cardNumber = '';
                        this.DeleteInvoice();
                    }
                    else {
                        this.showError = true;
                    }
                }
                GetSelectedInvoice(invoice, index) {
                    this.selectedInvoice = invoice;
                    this.selectedIndex = index;
                    this.showPayment = true;
                    this.showError = false;
                    this.cardNumber = '';
                }
                DeleteInvoice() {
                    this.paymentService.DeleteInvoice(this.selectedInvoice.Id).then(invoice => {
                        this.unpaidInvoices.splice(this.selectedIndex, 1);
                    }).catch(err => {
                        console.log(err);
                    });
                }
                ngOnInit() {
                    this.paymentService.GetAllUnpaidInvoicesOfTheAUser(1).then(invoice => {
                        this.ready = true;
                        this.unpaidInvoices = invoice;
                    }).catch(err => {
                        console.log(err);
                    });
                }
            };
            TenantPaymentComponent = __decorate([
                core_1.Component({
                    selector: 'tenant-payment',
                    templateUrl: "app/tenant-payment/tenant-payment.component.html",
                    styleUrls: ["app/tenant-payment/tenant-payment.style.css"],
                    providers: [tenant_payment_service_1.TenantPaymentService]
                }),
                __metadata("design:paramtypes", [tenant_payment_service_1.TenantPaymentService])
            ], TenantPaymentComponent);
            exports_1("TenantPaymentComponent", TenantPaymentComponent);
        }
    };
});
//# sourceMappingURL=tenant-payment.component.js.map