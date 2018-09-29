System.register(["@angular/core", "./admin-maintenance-situation.service"], function (exports_1, context_1) {
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
    var core_1, admin_maintenance_situation_service_1, AdminMaintenanceSituationComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_maintenance_situation_service_1_1) {
                admin_maintenance_situation_service_1 = admin_maintenance_situation_service_1_1;
            }
        ],
        execute: function () {
            AdminMaintenanceSituationComponent = class AdminMaintenanceSituationComponent {
                constructor(maintenanceService) {
                    this.maintenanceService = maintenanceService;
                }
                DownloadMaintenancePdfCurrentMonth() {
                    console.log("DOWNLOAD");
                    this.maintenanceService.GetMaintenanceSituationPdf(this.month, this.year);
                }
                DownloadMaintenanceExcelCurrentMonth() {
                    console.log("DOWNLOAD");
                    this.maintenanceService.GetMaintenanceSituationExcel(this.month, this.year);
                }
                DownloadMaintenancePdfPreviousMonth() {
                    var preMonth = this.month;
                    var preYear = this.year;
                    if (this.month == 1) {
                        preMonth = 12;
                        preYear = preYear - 1;
                    }
                    this.maintenanceService.GetMaintenanceSituationPdf(preMonth, preYear);
                    console.log("DOWNLOAD");
                }
                DownloadMaintenanceExcelPreviousMonth() {
                    var preMonth = this.month;
                    var preYear = this.year;
                    if (this.month == 1) {
                        preMonth = 12;
                        preYear = preYear - 1;
                    }
                    this.maintenanceService.GetMaintenanceSituationExcel(preMonth, preYear);
                    console.log("DOWNLOAD");
                }
                DownloadBalancePdf() {
                    this.maintenanceService.GetBalanceExpendituresPdf();
                    console.log("DOWNLOAD");
                }
                DownloadBalanceExcel() {
                    this.maintenanceService.GetBalanceExendituresExcel();
                    console.log("DOWNLOAD");
                }
                ngOnInit() {
                    var date = new Date();
                    this.year = date.getFullYear();
                    this.month = date.getMonth() + 1;
                }
            };
            AdminMaintenanceSituationComponent = __decorate([
                core_1.Component({
                    selector: 'admin-maintenance-situation',
                    templateUrl: "app/admin-maintenance-situation/admin-maintenance-situation.component.html",
                    styleUrls: ["app/admin-maintenance-situation/admin-maintenance-situation.style.css"],
                    providers: [admin_maintenance_situation_service_1.AdminMaintenanceSituationService]
                }),
                __metadata("design:paramtypes", [admin_maintenance_situation_service_1.AdminMaintenanceSituationService])
            ], AdminMaintenanceSituationComponent);
            exports_1("AdminMaintenanceSituationComponent", AdminMaintenanceSituationComponent);
        }
    };
});
//# sourceMappingURL=admin-maintenance-situation.component.js.map