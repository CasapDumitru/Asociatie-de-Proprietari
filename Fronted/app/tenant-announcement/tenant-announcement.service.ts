import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { Vote } from "../interfaces/vote";
import { UserType } from "../interfaces/userType";
import { User } from "../interfaces/user";
import { Announcement } from "../interfaces/announcement";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";
import { retry } from "rxjs/operator/retry";
import { Constants } from "./../shared/constants";
@Injectable()


export class TenantAnnouncementService {
    
      constructor(private http: Http) { }

      user1: User = {
            Id : 2,
            FirstName : "bbbbb",
            LastName : "bbbbb",
            UserName : "bbbbb",
            Email : "bbbbb",
            Password: "bbbbb",
            UserType: UserType.Tenant
      };

      user2: User = {
            Id : 1,
            FirstName : "aaaaa",
            LastName : "aaaaa",
            UserName : "aaaaa",
            Email : "aaaaa",
            Password: "aaaaa",
            UserType: UserType.Tenant
      }

      votes: Vote[] = [
            {
                  Id : 1,
                  Content : "Random vote 1",
                  Date : new Date(),
                  NumberOfVotes : 0,
                  Status: false,
                  User : this.user1
            },
            {
                  Id : 2,
                  Content : "Random vote 2",
                  Date : new Date(),
                  NumberOfVotes : 10,
                  Status: false,
                  User : this.user1
            },
            {
                  Id : 3,
                  Content : "Random vote 3",
                  Date : new Date(),
                  NumberOfVotes : 30,
                  Status: true,
                  User : this.user2
            }
      ];

      announcements: Announcement[] = [
            {
                  Id : 1,
                  Title : "Random announcement 1",
                  Content: "Lorem ipsum nr 1",
                  Date : new Date(),
                  User : this.user2
            },
            {
                  Id : 2,
                  Title : "Random announcement 2",
                  Content: "Lorem ipsum nr 2",
                  Date : new Date(),
                  User : this.user1
            },
            {
                  Id : 3,
                  Title : "Random announcement 3",
                  Content: "Lorem ipsum nr 3",
                  Date : new Date(),
                  User : this.user2
            }
      ];

      GetAllVotes() {
            return this.http.get(Constants.API_ENDPOINT+'Vote')
                   .map(res => res.json()).toPromise();
      }

      GetAllAnnouncements() {
            return this.http.get(Constants.API_ENDPOINT+'Announcement')
                   .map(res => res.json()).toPromise();
      }

      AddVote(vote: Vote) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(vote);

            return this.http.post(Constants.API_ENDPOINT + 'Vote', body, options).map(res => res.json()).toPromise();
      }

      AddAnnouncement(announcement: Announcement) {

            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(announcement);

            return this.http.post(Constants.API_ENDPOINT + 'Announcement', body, options).map(res => res.json()).toPromise();
      }

      EditVote(vote: Vote) {
         let headers = new Headers({ 'Content-Type': 'application/json' });
         let options = new RequestOptions({ headers: headers });
         let body = JSON.stringify(vote);

        return this.http.put(Constants.API_ENDPOINT + "Vote/" + vote.Id , body, options).map(res => res.json()).toPromise();
      }

      DeleteAnnouncement(id: number) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.delete(Constants.API_ENDPOINT + 'Announcement/' + id,options)
                  .map(res => res.json()).toPromise();
      }
}