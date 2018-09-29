import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';
import { User } from './../interfaces/user';
import { UserType } from './../interfaces/userType';
import { Message } from './../interfaces/message';
import { Event } from './../interfaces/event';
import { Constants } from "./../shared/constants";

@Injectable()

export class TenantHomeService {
    
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

      messages: Message[] = [
            {
                  Id : 1,
                  Text : "Hello",
                  Date : new Date(),
                  User : this.users[1],
                  ConversationId : 1
            },
            {
                  Id : 2,
                  Text : "How are you?",
                  Date : new Date(),
                  User : this.users[1],
                  ConversationId : 1
            },
            {
                  Id : 3,
                  Text : "Hello",
                  Date : new Date(),
                  User : this.users[0],
                  ConversationId : 1
            },
            {
                  Id : 4,
                  Text : "I am fine",
                  Date : new Date(),
                  User : this.users[0],
                  ConversationId : 1
            },
            {
                  Id : 5,
                  Text : "I am glad for you! Have a good day.",
                  Date : new Date(),
                  User : this.users[1],
                  ConversationId : 1
            },
            {
                  Id : 1,
                  Text : "Hello",
                  Date : new Date(),
                  User : this.users[1],
                  ConversationId : 1
            },
            {
                  Id : 2,
                  Text : "How are you?",
                  Date : new Date(),
                  User : this.users[1],
                  ConversationId : 1
            },
            {
                  Id : 3,
                  Text : "Hello",
                  Date : new Date(),
                  User : this.users[0],
                  ConversationId : 1
            },
            {
                  Id : 4,
                  Text : "I am fine",
                  Date : new Date(),
                  User : this.users[0],
                  ConversationId : 1
            },
            {
                  Id : 5,
                  Text : "I am glad for you! Have a good day.",
                  Date : new Date(),
                  User : this.users[1],
                  ConversationId : 1
            }
      ]

      events: Event[] = [
       {
            Id : 1,
            Title: "Cerinta 1",
            Description: "Very good",
            Location: "Cluj-Napoca, Observator 34",
            User: this.users[0],
            Date: new Date()
        },
        {
            Id : 2,
            Title: "Cerinta 1",
            Description: "Very good",
            Location: "Cluj-Napoca, Observator 34",
            User: this.users[1],
            Date: new Date()
        },
        {
            Id : 3,
            Title: "Cerinta 1",
            Description: "Very good",
            Location: "Cluj-Napoca, Observator 34",
            User: this.users[2],
            Date: new Date()
        },
        {
            Id : 4,
            Title: "Cerinta 1",
            Description: "Very good",
            Location: "Cluj-Napoca, Observator 34",
            User: this.users[3],
            Date: new Date()
        },
        {
            Id : 5,
            Title: "Cerinta 1",
            Description: "Very good",
            Location: "Cluj-Napoca, Observator 34",
            User: this.users[0],
            Date: new Date()
        },
        {
            Id : 6,
            Title: "Cerinta 1",
            Description: "Very good",
            Location: "Cluj-Napoca, Observator 34",
            User: this.users[0],
            Date: new Date()
        },
      ];

      events1: Event[] = [
       {
            Id : 1,
            Title: "Cerinta 1",
            Description: "Very good",
            Location: "Cluj-Napoca, Observator 34",
            User: this.users[0],
            Date: new Date()
        }
      ]

      GetAllUsers(): User[] {
            return this.users;
      }

      GetUser(id: number) {
            return this.users[0];
      }

      PostMessage(message: Message){
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(message);

            
            return Object.assign({}, message);
            //return this.http.post("http://localhost:61957/api/messenger/SendMessage", body, options).map(res => res.json()).toPromise();
      }

      GetMessages(conversationId) {
            return this.messages;
            //return this.http.get('http://localhost:61957/api/messenger/GetMessages/', conversationId).map(res => res.json()).toPromise();
      }

      GetOrCreateConversation(userOneId,userTwoId) {
          return 1;
            //return this.http.get('http://localhost:61957/api/messenger/GetConversation/' + '/' + userOneId + '/' 
            //        + userTwoId).map(res => res.json()).toPromise();
      }

      GetEventsByMonthAndYear(month: number, year: number) {

            return this.http.get(Constants.API_ENDPOINT+'Event/' + month + '/' + year )
                  .map(res => res.json()).toPromise();
            /*var events = [];
            if(month == 12)
                  return this.events;
            else if(month == 11)
                  return this.events1;
            else 
                  return events;*/
      }

      CreateEvent(event: Event) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            let body = JSON.stringify(event);

            return this.http.post(Constants.API_ENDPOINT + 'Event', body, options).map(res => res.json()).toPromise();
            //return Object.assign({}, event);
      }

      DeleteEvent(eventId: number) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.delete(Constants.API_ENDPOINT + 'Event/' + eventId ,options)
                  .map(res => res.json()).toPromise();
      }

}