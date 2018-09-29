import { Component } from "@angular/core";
import { AdminMaintenanceSituationService } from './admin-maintenance-situation.service';

@Component({
    selector: 'admin-maintenance-situation',
    templateUrl:"app/admin-maintenance-situation/admin-maintenance-situation.component.html",
    styleUrls:["app/admin-maintenance-situation/admin-maintenance-situation.style.css"],
    providers:[AdminMaintenanceSituationService]
})

export class AdminMaintenanceSituationComponent {

    constructor(private maintenanceService: AdminMaintenanceSituationService) {}

    month: number;
    year: number;

    DownloadMaintenancePdfCurrentMonth() {
        console.log("DOWNLOAD");
        this.maintenanceService.GetMaintenanceSituationPdf(this.month,this.year);
    }

    DownloadMaintenanceExcelCurrentMonth() {
        console.log("DOWNLOAD");
        this.maintenanceService.GetMaintenanceSituationExcel(this.month,this.year);
    }

    DownloadMaintenancePdfPreviousMonth() {
        var preMonth = this.month;
        var preYear = this.year;
        if(this.month == 1) {
            preMonth = 12;
            preYear = preYear - 1;
        }
        this.maintenanceService.GetMaintenanceSituationPdf(preMonth, preYear);
        console.log("DOWNLOAD");
    }

    DownloadMaintenanceExcelPreviousMonth() {
        var preMonth = this.month;
        var preYear = this.year;
        if(this.month == 1) {
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
}