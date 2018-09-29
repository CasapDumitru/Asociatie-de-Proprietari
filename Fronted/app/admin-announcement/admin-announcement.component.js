System.register(["@angular/core", "./admin-announcement.service"], function (exports_1, context_1) {
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
    var core_1, admin_announcement_service_1, AdminAnnouncementComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_announcement_service_1_1) {
                admin_announcement_service_1 = admin_announcement_service_1_1;
            }
        ],
        execute: function () {
            AdminAnnouncementComponent = class AdminAnnouncementComponent {
                constructor(announcementService) {
                    this.announcementService = announcementService;
                    this.option = ['Amount paid by tenenats', 'Tenants with outstanding amounts'];
                    this.ready = false;
                }
                ngOnInit() {
                    this.selectedOption = this.option[0];
                    this.announcementService.GetAllPaidInvoices().then(paidInv => {
                        this.paidInvoices = paidInv;
                        this.announcementService.GetAllUnpaidInvoices().then(unpaidInv => {
                            this.unpaidInvoices = unpaidInv;
                        }).catch(err => {
                            console.log(err);
                        });
                        this.ready = true;
                    }).catch(err => {
                        console.log(err);
                    });
                }
            };
            AdminAnnouncementComponent = __decorate([
                core_1.Component({
                    selector: 'admin-announcement',
                    templateUrl: "app/admin-announcement/admin-announcement.component.html",
                    styleUrls: ["app/admin-announcement/admin-announcement.style.css"],
                    providers: [admin_announcement_service_1.AdminAnnouncementService]
                }),
                __metadata("design:paramtypes", [admin_announcement_service_1.AdminAnnouncementService])
            ], AdminAnnouncementComponent);
            exports_1("AdminAnnouncementComponent", AdminAnnouncementComponent);
        }
    };
});
//# sourceMappingURL=admin-announcement.component.js.map