System.register(["@angular/core", "./admin-home.service", "../interfaces/userType"], function (exports_1, context_1) {
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
    var core_1, admin_home_service_1, userType_1, AdminHomeComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_home_service_1_1) {
                admin_home_service_1 = admin_home_service_1_1;
            },
            function (userType_1_1) {
                userType_1 = userType_1_1;
            }
        ],
        execute: function () {
            AdminHomeComponent = class AdminHomeComponent {
                constructor(adminHomeService) {
                    this.adminHomeService = adminHomeService;
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
                    this.adminHomeService.GetEventsByMonthAndYear(+this.startDate.split('-')[1], +this.startDate.split('-')[0]).then(events => {
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
                        Text: this.messageText,
                        Date: new Date(),
                        User: this.currentUser,
                        ConversationId: this.conversationID
                    };
                    this.messageText = "";
                    var mes = this.adminHomeService.PostMessage(message);
                    this.messages.push(mes);
                    this.scrollTop = this.scrollTop + 100;
                }
                HideConversation() {
                    this.showConversation = false;
                }
                CreateEvent() {
                    this.newEvent.User = {
                        Id: 1,
                        FirstName: "bbbbb",
                        LastName: "bbbbb",
                        UserName: "bbbbb",
                        Email: "bbbbb",
                        Password: "bbbbb",
                        UserType: userType_1.UserType.Tenant
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
                    if (confirm("Are you sure to delete this event")) {
                        this.adminHomeService.DeleteEvent(id).then(() => {
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
                    this.currentUser = this.adminHomeService.GetUser(userId);
                    this.users = this.adminHomeService.GetAllUsers();
                    this.adminHomeService.GetEventsByMonthAndYear(+this.startDate.split('-')[1], +this.startDate.split('-')[0]).then(events => {
                        this.events = events;
                    }).catch(err => {
                        console.log(err);
                    });
                    this.GetMonthName();
                }
            };
            AdminHomeComponent = __decorate([
                core_1.Component({
                    selector: 'admin-home',
                    templateUrl: "app/admin-home/admin-home.component.html",
                    styleUrls: ["app/admin-home/admin-home.style.css"],
                    providers: [admin_home_service_1.AdminHomeService]
                }),
                __metadata("design:paramtypes", [admin_home_service_1.AdminHomeService])
            ], AdminHomeComponent);
            exports_1("AdminHomeComponent", AdminHomeComponent);
        }
    };
});
//# sourceMappingURL=admin-home.component.js.map