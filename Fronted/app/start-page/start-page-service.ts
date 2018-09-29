import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { User } from "./../interfaces/user";
import { UserType } from './../interfaces/userType';
import { Constants } from './../shared/constants';
@Injectable()


export class StartPageService {
    
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
        }
      ];
      
      Login(userName:string, password: string) {
        let user = {
            Id : null,
            FirstName : "",
            LastName : "",
            UserName : userName,
            Email : "",
            Password: password,
            UserType: UserType.Admin
        }
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(user);

        return this.http.post(Constants.API_ENDPOINT + 'Login', body, options).map(res => res.json()).toPromise();
        /*var user = null;
        this.users.forEach((u) => {
            if(u.UserName == userName && u.Password == password) {
                user = u;
            }
        });
        return user;*/
      }

      Register(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(user);

        return this.http.post(Constants.API_ENDPOINT + 'Login/Register', body, options).map(res => res.json()).toPromise();
          /*this.users.push(user);
          return user;*/
      }

}