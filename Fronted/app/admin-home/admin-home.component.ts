import { Component } from "@angular/core";
import { AdminHomeService } from './admin-home.service';
import { User } from './../interfaces/user';
import { Message } from './../interfaces/message';
import { Event } from './../interfaces/event';
import { UserType } from "../interfaces/userType";

@Component({
    selector: 'admin-home',
    templateUrl:"app/admin-home/admin-home.component.html",
    styleUrls:["app/admin-home/admin-home.style.css"],
    providers:[AdminHomeService]
})

export class AdminHomeComponent {
    
    constructor(private adminHomeService: AdminHomeService) {
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
      this.adminHomeService.GetEventsByMonthAndYear(+this.startDate.split('-')[1],+this.startDate.split('-')[0]).then(events => {
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
        console.log(this.startDate);
        this.conversationUser = user;
        this.conversationID = this.adminHomeService.GetOrCreateConversation(this.currentUser.Id, user.Id);
        this.messages = this.adminHomeService.GetMessages(this.conversationID);
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
        var mes = this.adminHomeService.PostMessage(message);
        this.messages.push(mes);
        this.scrollTop = this.scrollTop + 100;
    }

    HideConversation() {
        this.showConversation = false;
    }

    CreateEvent() {
        this.newEvent.User =  {
            Id : 1,
            FirstName : "bbbbb",
            LastName : "bbbbb",
            UserName : "bbbbb",
            Email : "bbbbb",
            Password: "bbbbb",
            UserType: UserType.Tenant
        };

        this.adminHomeService.CreateEvent(this.newEvent).then(event => {
            console.log(event);
    
            /*console.log(event.Date.getFullYear());
            if(event.Date.getFullYear() + "" == this.startDate.split('-')[0] && ('0' + (event.Date.getMonth() + 1)).slice(-2) == this.startDate.split('-')[1]) {
              this.events.push(event);
            }  */

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
    }

    DeleteEvent(id, index) {
        if(confirm("Are you sure to delete this event")) {
            this.adminHomeService.DeleteEvent(id).then(() => {
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
        this.currentUser = this.adminHomeService.GetUser(userId);
        this.users = this.adminHomeService.GetAllUsers();
        this.adminHomeService.GetEventsByMonthAndYear(+this.startDate.split('-')[1],+this.startDate.split('-')[0]).then(events => {
            this.events = events;
        }).catch(err => {
          console.log(err);
        });
        this.GetMonthName();
    }
}