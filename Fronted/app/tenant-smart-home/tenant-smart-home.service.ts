import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { User } from'./../interfaces/user';
import { UserType } from './../interfaces/userType';
import { SmartHome} from'./../interfaces/smartHome';
import { NotifiedUser } from'./../interfaces/notifiedUser';
import { Constants } from "./../shared/constants";

@Injectable()

export class TenantSmartHomeService {
    
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
            UserType: UserType.Tenant
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
            UserType: UserType.Tenant
        }
      ];

      smartHome: SmartHome = {
            Id : 1,
            User : this.users[0],
            IsActivated : false,
            Ip: '193.129.12.2'
      }

      notifiedUsers: NotifiedUser[] = [
            {
                  Id: 1,
                  Date: new Date(),
                  User: this.users[1],
                  SmartHome: this.smartHome
            },
            {
                  Id: 2,
                  Date: new Date(),
                  User: this.users[3],
                  SmartHome: this.smartHome
            }
      ]

      constructor(private http: Http) { }

      CreateSmartHome(smartHome: SmartHome) {
            console.log(smartHome);
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(smartHome);

            return this.http.post(Constants.API_ENDPOINT + 'SmartHome', body, options).map(res => res.json()).toPromise();
            //return smartHome;
      }

      GetSmartHome(userId: number) {
            return this.http.get(Constants.API_ENDPOINT+'SmartHome/'+userId)
                   .map(res => res.json()).toPromise();
      }

      DeleteSmartHome(smartHomeId: number) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.delete(Constants.API_ENDPOINT + 'SmartHome/' + smartHomeId,options)
                  .map(res => res.json()).toPromise();
      }

      EditSmartHome(smartHome: SmartHome) {
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(smartHome);

         return this.http.put(Constants.API_ENDPOINT + "SmartHome/" + smartHome.Id, body, options).map(res => res.json()).toPromise();
      }

      GetUser(id: number) {
            return this.http.get(Constants.API_ENDPOINT+'User/'+id)
                   .map(res => res.json()).toPromise();
      }

      GetAllTenants() {
            return this.users;
      }

      GetAllNotifiedTenants() {
            return this.notifiedUsers;
      }

      AddNotifiedTenant(notif: NotifiedUser) {
            return notif;
      }

      DeleteNotifiedTenant(notifId: number) {
            
      }
}