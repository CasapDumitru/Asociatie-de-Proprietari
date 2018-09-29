import { Component } from "@angular/core";
import { AdminAnnouncementService } from './admin-announcement.service';
import { Invoice } from './../interfaces/invoice';

@Component({
    selector: 'admin-announcement',
    templateUrl:"app/admin-announcement/admin-announcement.component.html",
    styleUrls:["app/admin-announcement/admin-announcement.style.css"],
    providers:[AdminAnnouncementService]
})

export class AdminAnnouncementComponent {

    constructor(private announcementService: AdminAnnouncementService) {
       
    }

    paidInvoices: Invoice[];
    unpaidInvoices: Invoice[];
    option: string[] =  ['Amount paid by tenenats','Tenants with outstanding amounts'];
    selectedOption: string;
    ready: boolean = false;

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
}