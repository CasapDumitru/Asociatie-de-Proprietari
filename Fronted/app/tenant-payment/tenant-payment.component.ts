import { Component } from "@angular/core";
import { TenantPaymentService } from './tenant-payment.service'
import { Invoice } from "../interfaces/invoice";
import { CreditCard } from "../interfaces/creditcard";
import { User } from "../interfaces/user";
import { UserType } from "../interfaces/userType";

@Component({
    selector: 'tenant-payment',
    templateUrl:"app/tenant-payment/tenant-payment.component.html",
    styleUrls:["app/tenant-payment/tenant-payment.style.css"],
    providers: [TenantPaymentService]
})

export class TenantPaymentComponent {

    constructor(private paymentService: TenantPaymentService) {}

    unpaidInvoices: Invoice[];

    user: User = {
        Id : 1,
        FirstName : "aaaaa",
        LastName : "aaaaa",
        UserName : "aaaaa",
        Email : "aaaaa",
        Password: "aaaaa",
        UserType: UserType.Tenant
    }
          
    cardNumber: string;
    showPayment: boolean = false;
    showError: boolean = false;
    selectedInvoice: Invoice;
    selectedIndex: number = -1;
    ready: boolean = true;

    PayInvoice() {
        if(this.paymentService.ExistsCard(this.cardNumber)) {
            this.showPayment = false;
            this.showError = false;
            this.cardNumber = '';
            this.DeleteInvoice();
        } else {
            this.showError = true;
        }
    }

    GetSelectedInvoice(invoice: Invoice, index: number) {
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
       this.paymentService.GetAllUnpaidInvoicesOfTheAUser(1).then(invoice => 
        {
            this.ready = true;
            this.unpaidInvoices = invoice
        }).catch(err => {
            console.log(err);
        });     
    }
}