import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Requirement } from './../interfaces/requirement';
import { User } from './../interfaces/user';
import { UserType } from './../interfaces/userType';
import { Constants } from "./../shared/constants";

@Injectable()


export class TenantRequirementService {
    
      constructor(private http: Http) { }

      user: User = {
            Id : 1,
            FirstName : "aaaaa",
            LastName : "aaaaa",
            UserName : "aaaaa",
            Email : "aaaaa",
            Password: "aaaaa",
            UserType: UserType.Tenant
        }

        user1: User = {
            Id : 2,
            FirstName : "bbbbb",
            LastName : "bbbbb",
            UserName : "bbbbb",
            Email : "bbbbb",
            Password: "bbbbb",
            UserType: UserType.Tenant
        }

       requirements: Requirement[] = [
       {
            Id : 1,
            Name: "Cerinta 1",
            Description: "Very good",
            User: this.user,
            Date: new Date()
        },
        {
            Id : 2,
            Name: "Cerinta 2",
            Description: "Very good",
            User: this.user,
            Date: new Date()
        },
        {
            Id : 3,
            Name: "Cerinta 3",
            Description: "Very good",
            User: this.user1,
            Date: new Date()
        },
        {
            Id : 4,
            Name: "Cerinta 4",
            Description: "Very good",
            User: this.user1,
            Date: new Date()
        },
        {
            Id : 5,
            Name: "Cerinta 1",
            Description: "Very good",
            User: this.user,
            Date: new Date()
        },
        {
            Id : 6,
            Name: "Cerinta 2",
            Description: "Very good",
            User: this.user,
            Date: new Date()
        },
        {
            Id : 7,
            Name: "Cerinta 3",
            Description: "Very good",
            User: this.user1,
            Date: new Date()
        },
        {
            Id : 8,
            Name: "Cerinta 4",
            Description: "Very good",
            User: this.user1,
            Date: new Date()
        },
        {
            Id : 9,
            Name: "Cerinta 4",
            Description: "Very good",
            User: this.user1,
            Date: new Date()
        },
        {
            Id : 10,
            Name: "Cerinta 1",
            Description: "Very good",
            User: this.user,
            Date: new Date()
        },
        {
            Id : 11,
            Name: "Cerinta 2",
            Description: "Very good",
            User: this.user,
            Date: new Date()
        },
        {
            Id : 12,
            Name: "Cerinta 3",
            Description: "Very good",
            User: this.user1,
            Date: new Date()
        },
        {
            Id : 13,
            Name: "Cerinta 4",
            Description: "Very good",
            User: this.user1,
            Date: new Date()
        }
      ];

      

      GetAllRequirements(){
            return this.http.get(Constants.API_ENDPOINT+'Requirement')
                   .map(res => res.json()).toPromise();
      }

      GetUserById(id: number) {
            return this.http.get(Constants.API_ENDPOINT+'User/' + id)
                   .map(res => res.json()).toPromise();
      }

      CreateRequirement(requirement: Requirement) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(requirement);

            return this.http.post(Constants.API_ENDPOINT + 'Requirement', body, options).map(res => res.json()).toPromise();
      }

      DeleteRequirement(requirement: Requirement) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.delete(Constants.API_ENDPOINT + 'Requirement/' + requirement.Id,options)
                  .map(res => res.json()).toPromise();
      }

      EditRequirement(requirement: Requirement) {
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(requirement);

         return this.http.post(Constants.API_ENDPOINT + "Requirement/" + requirement.Id, body, options).map(res => res.json()).toPromise();
      }
}