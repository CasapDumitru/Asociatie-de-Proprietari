import { Component } from "@angular/core";
import { AdminAdministrativeService } from './admin-administrative-charges.service';
import { Tax } from './../interfaces/tax';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { concat } from "rxjs/operator/concat";
//import { last } from "@angular/router/src/utils/collection";

@Component({
    selector: 'admin-administrative-charges',
    templateUrl:"app/admin-administrative-charges/admin-administrative-charges.component.html",
    styleUrls:["app/admin-administrative-charges/admin-administrative-charges.style.css"],
    providers:[AdminAdministrativeService]
})

export class AdminAdministrativeChargesComponent implements OnInit {

    constructor(private administrativeService: AdminAdministrativeService) {}

    taxes: Tax[];
    newTax: Tax = {
        Id: 0,
        Name: ' ',
        Price: 0
    };

    ready: boolean = false;

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

    DeleteTax(tax: Tax, index: number) {
        if(confirm("Are you sure to delete this?")) {
            this.administrativeService.DeleteTax(tax.Id).then(tax => {
                this.taxes.splice(index, 1);
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
