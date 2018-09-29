import { Injectable, transition } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Invoice } from "../interfaces/invoice";
import { User } from "../interfaces/user";
import { UserType } from "../interfaces/userType";
import { CreditCard } from "../interfaces/creditcard";
import { retry } from "rxjs/operator/retry";
import { Constants } from "./../shared/constants";

@Injectable()


export class TenantPaymentService {
    
      constructor(private http: Http) { }

      user: User = {
            Id : 1,
            FirstName : "aaaaa",
            LastName : "aaaaa",
            UserName : "aaaaa",
            Email : "aaaaa",
            Password: "aaaaa",
            UserType: UserType.Tenant
      };
      
      creditCard: CreditCard = {
            Id: 1,
            CardNumber: 'aaa-aaa',
            User: this.user
      }

      unpaidInvoices: Invoice[] = [
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

      GetAllUnpaidInvoicesOfTheAUser(id: number) {
            //return this.unpaidInvoices;
            return this.http.get(Constants.API_ENDPOINT + 'Invoice/GetUnpaid')
            .map(res => res.json()).toPromise();        
      }

      DeleteInvoice(id: number) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.delete(Constants.API_ENDPOINT + 'Invoice/' + id, options)
                  .map(res => res.json()).toPromise();
      }

      ExistsCard(cardNumber: string) : boolean {
            return cardNumber === this.creditCard.CardNumber ? true : false;
      }
}