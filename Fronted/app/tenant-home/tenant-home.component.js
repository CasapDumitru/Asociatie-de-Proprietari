System.register(["@angular/core", "./tenant-home.service", "../interfaces/userType"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, tenant_home_service_1, userType_1, TenantHomeComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tenant_home_service_1_1) {
                tenant_home_service_1 = tenant_home_service_1_1;
            },
            function (userType_1_1) {
                userType_1 = userType_1_1;
            }
        ],
        execute: function () {
            TenantHomeComponent = class TenantHomeComponent {
                constructor(homeService) {
                    this.homeService = homeService;
                    this.conversationID = 0;
                    this.showConversation = false;
                    this.scrollTop = "100000000";
                    this.showEvents = false;
                    this.newEvent = {
                        Id: 0,
                        Title: "",
                        Description: "",
                        Location: "",
                        User: null,
                        Date: new Date()
                    };
                    var date = new Date();
                    this.startDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2);
                }
                set currentMonth(e) {
                    console.log(e);
                    this.startDate = e;
                    this.homeService.GetEventsByMonthAndYear(+this.startDate.split('-')[1], +this.startDate.split('-')[0]).then(events => {
                        this.events = events;
                    }).catch(err => {
                        console.log(err);
                    });
                    this.GetMonthName();
                }
                get currentMonth() {
                    return this.startDate;
                }
                GetMonthName() {
                    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
                    this.monthName = monthNames[+this.startDate.split('-')[1] - 1] + "  " + this.startDate.split('-')[0];
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
                        Text: this.messageText,
                        Date: new Date(),
                        User: this.currentUser,
                        ConversationId: this.conversationID
                    };
                    this.messageText = "";
                    var mes = this.homeService.PostMessage(message);
                    this.messages.push(mes);
                    this.scrollTop = this.scrollTop + 100;
                }
                HideConversation() {
                    this.showConversation = false;
                }
                CreateEvent() {
                    this.newEvent.User = {
                        Id: 1,
                        FirstName: "aaaaa",
                        LastName: "aaaaa",
                        UserName: "aaaaa",
                        Email: "aaaaa",
                        Password: "aaaaa",
                        UserType: userType_1.UserType.Tenant
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
                    if (confirm("Are you sure to delete this event")) {
                        this.homeService.DeleteEvent(id).then(() => {
                            this.events.splice(index, 1);
                        }).catch(err => {
                            console.log(err);
                        });
                    }
                }
                ShowEvents(show) {
                    this.showEvents = show;
                }
                ngOnInit() {
                    var userId = +localStorage.getItem("id_token");
                    this.currentUser = this.homeService.GetUser(userId);
                    this.users = this.homeService.GetAllUsers();
                    this.homeService.GetEventsByMonthAndYear(+this.startDate.split('-')[1], +this.startDate.split('-')[0]).then(events => {
                        this.events = events;
                        console.log(events);
                    }).catch(err => {
                        console.log(err);
                    });
                    this.GetMonthName();
                }
            };
            TenantHomeComponent = __decorate([
                core_1.Component({
                    selector: 'tenant-home',
                    templateUrl: "app/tenant-home/tenant-home.component.html",
                    styleUrls: ["app/tenant-home/tenant-home.style.css"],
                    providers: [tenant_home_service_1.TenantHomeService]
                }),
                __metadata("design:paramtypes", [tenant_home_service_1.TenantHomeService])
            ], TenantHomeComponent);
            exports_1("TenantHomeComponent", TenantHomeComponent);
        }
    };
});
//# sourceMappingURL=tenant-home.component.js.map