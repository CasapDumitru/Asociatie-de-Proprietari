import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Invoice } from './../interfaces/invoice';
import { User } from './../interfaces/user';
import { UserType } from './../interfaces/userType';
import { Constants } from "./../shared/constants";

@Injectable()

export class AdminAnnouncementService {
    
      constructor(private http: Http) { }

      users: User[] = [
        {
            Id : 1,
            FirstName : "aaaaa",
            LastName : "aaaaa",
            UserName : "aaaaa",
            Email : "aaaaa",
            Password: "aaaaa",
            UserType: UserType.Tenant
        },
        {
            Id : 2,
            FirstName : "bbbbb",
            LastName : "bbbbb",
            UserName : "bbbbb",
            Email : "bbbbb",
            Password: "bbbbb",
            UserType: UserType.Admin
        },
        {
            Id : 3,
            FirstName : "ccccc",
            LastName : "ccccc",
            UserName : "ccccc",
            Email : "ccccc",
            Password: "ccccc",
            UserType: UserType.Tenant
        },
        {
            Id : 4,
            FirstName : "ddddd",
            LastName : "ddddd",
            UserName : "ddddd",
            Email : "ddddd",
            Password: "ddddd",
            UserType: UserType.Admin
        }
      ];

      paidInvoices: Invoice[] = [
            {
                  Id: 1,
                  Date: new Date(),
                  User: this.users[0],
                  Amount: 2000,
                  IsPaid: true
            },
            {
                  Id: 2,
                  Date: new Date(),
                  User: this.users[2],
                  Amount: 3500,
                  IsPaid: true
            },
            {
                  Id: 3,
                  Date: new Date(),
                  User: this.users[0],
                  Amount: 4000,
                  IsPaid: true
            },
            {
                  Id: 4,
                  Date: new Date(),
                  User: this.users[2],
                  Amount: 1000,
                  IsPaid: true
            },
            {
                  Id: 5,
                  Date: new Date(),
                  User: this.users[0],
                  Amount: 2500,
                  IsPaid: true
            },
            {
                  Id: 6,
                  Date: new Date(),
                  User: this.users[0],
                  Amount: 100,
                  IsPaid: true
            }
      ]

      unpaidInvoices: Invoice[] = [
            {
                  Id: 1,
                  Date: new Date(),
                  User: this.users[0],
                  Amount: 12000,
                  IsPaid: false
            },
            {
                  Id: 2,
                  Date: new Date(),
                  User: this.users[2],
                  Amount: 5000,
                  IsPaid: false
            },
            {
                  Id: 3,
                  Date: new Date(),
                  User: this.users[0],
                  Amount: 3000,
                  IsPaid: false
            },
            {
                  Id: 4,
                  Date: new Date(),
                  User: this.users[2],
                  Amount: 4500,
                  IsPaid: false
            },
            {
                  Id: 5,
                  Date: new Date(),
                  User: this.users[0],
                  Amount: 10000,
                  IsPaid: false
            },
            {
                  Id: 6,
                  Date: new Date(),
                  User: this.users[0],
                  Amount: 100,
                  IsPaid: false
            }
      ]

      GetAllPaidInvoices() {
            return this.http.get(Constants.API_ENDPOINT+'Invoice/GetPaid')
                  .map(res => res.json()).toPromise();

            //return this.paidInvoices;
      }

      GetAllUnpaidInvoices() {
            return this.http.get(Constants.API_ENDPOINT+'Invoice/GetUnpaid')
                  .map(res => res.json()).toPromise();

           // return this.unpaidInvoices;
      }

}