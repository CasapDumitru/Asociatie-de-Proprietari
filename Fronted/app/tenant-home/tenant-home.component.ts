import { Component } from "@angular/core";
import { TenantHomeService } from './tenant-home.service'
import { User } from './../interfaces/user';
import { Message } from './../interfaces/message';
import { Event } from './../interfaces/event';
import { concat } from "rxjs/operator/concat";
import { UserType } from "../interfaces/userType";

@Component({
    selector: 'tenant-home',
    templateUrl:"app/tenant-home/tenant-home.component.html",
    styleUrls:["app/tenant-home/tenant-home.style.css"],
    providers: [TenantHomeService]
})

export class TenantHomeComponent {

    constructor(private homeService: TenantHomeService) {
        var date = new Date();
        this.startDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2);
    }

    users: User[];
    conversationID: number = 0;
    messages: Message[];
    messageText: string;
    showConversation: boolean = false;
    currentUser: User;
    conversationUser: User;
    scrollTop: string = "100000000";
    startDate: string;
    events: Event[];
    monthName: string;
    showEvents: boolean = false;
    newEvent: Event = {
        Id : 0,
        Title: "",
        Description: "",
        Location: "",
        User: null,
        Date: new Date()
    }

    set currentMonth(e){
      console.log(e);
      this.startDate = e;
      this.homeService.GetEventsByMonthAndYear(+this.startDate.split('-')[1],+this.startDate.split('-')[0]).then(events => {
            this.events = events;
      }).catch(err => {
          console.log(err);
      });
      this.GetMonthName();
    }

    get currentMonth(){
      return this.startDate;
    }

    GetMonthName() {
      var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December' ]; 
      this.monthName = monthNames[+this.startDate.split('-')[1]-1] + "  " + this.startDate.split('-')[0];
    }
    OpenMessage(user) {
        this.conversationUser = user;
        this.conversationID = this.homeService.GetOrCreateConversation(this.currentUser.Id, user.Id);
        this.messages = this.homeService.GetMessages(this.conversationID);
        console.log(this.messages);
        this.showConversation = true;
    }

    SendMessage() {
        console.log(this.scrollTop);
        var message = {
           Id: null,
           Text : this.messageText,
           Date : new Date(),
           User : this.currentUser,
           ConversationId : this.conversationID
        }
          
        this.messageText = "";
        var mes = this.homeService.PostMessage(message);
        this.messages.push(mes);
        this.scrollTop = this.scrollTop + 100;
    }

    HideConversation() {
        this.showConversation = false;
    }

    CreateEvent() {
        this.newEvent.User =  {
            Id : 1,
            FirstName : "aaaaa",
            LastName : "aaaaa",
            UserName : "aaaaa",
            Email : "aaaaa",
            Password: "aaaaa",
            UserType: UserType.Tenant
        };

        this.homeService.CreateEvent(this.newEvent).then(event => {
            console.log(event);
    
           /* console.log(event.Date.getFullYear());
            if(event.Date.getFullYear() + "" == this.startDate.split('-')[0] && ('0' + (event.Date.getMonth() + 1)).slice(-2) == this.startDate.split('-')[1]) {
              this.events.push(event);
            }*/  

            this.events.push(event);

            /*this.newEvent = {
                  Id : 0,
                  Title: "",
                  Description: "",
                  Location: "",
                  User: null,
                  Date: new Date()
            }*/

        }).catch(err => {
            console.log(err);
        });
      /*this.newEvent.User = this.currentUser;
      var ev = this.homeService.CreateEvent(this.newEvent);
      if(ev.Date.getFullYear() + "" == this.startDate.split('-')[0] && ('0' + (ev.Date.getMonth() + 1)).slice(-2) == this.startDate.split('-')[1]) {
        this.events.push(ev);
      }    
      this.newEvent = {
            Id : 0,
            Title: "",
            Description: "",
            Location: "",
            User: null,
            Date: new Date()
      }*/
    }

    DeleteEvent(id, index) {
        if(confirm("Are you sure to delete this event")) {
            this.homeService.DeleteEvent(id).then(() => {
                this.events.splice(index,1);
            }).catch(err => {
                console.log(err);
            });
        }
    }

    ShowEvents(show:boolean) {
      this.showEvents = show;
    }

    ngOnInit() {
        var userId = +localStorage.getItem("id_token");
        this.currentUser = this.homeService.GetUser(userId);
        this.users = this.homeService.GetAllUsers();
        this.homeService.GetEventsByMonthAndYear(+this.startDate.split('-')[1],+this.startDate.split('-')[0]).then(events => {
            this.events = events;
            console.log(events);
        }).catch(err => {
          console.log(err);
        });        
      this.GetMonthName();
    }
}