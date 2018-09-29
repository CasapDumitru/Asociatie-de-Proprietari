System.register(["@angular/core", "@angular/http", "rxjs/Rx", "./../interfaces/userType", "./../shared/constants"], function (exports_1, context_1) {
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
    var core_1, http_1, http_2, userType_1, constants_1, TenantHomeService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {
            },
            function (userType_1_1) {
                userType_1 = userType_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            TenantHomeService = class TenantHomeService {
                constructor(http) {
                    this.http = http;
                    this.users = [
                        {
                            Id: 1,
                            FirstName: "aaaaa",
                            LastName: "aaaaa",
                            UserName: "aaaaa",
                            Email: "aaaaa",
                            Password: "aaaaa",
                            UserType: userType_1.UserType.Tenant
                        },
                        {
                            Id: 2,
                            FirstName: "bbbbb",
                            LastName: "bbbbb",
                            UserName: "bbbbb",
                            Email: "bbbbb",
                            Password: "bbbbb",
                            UserType: userType_1.UserType.Admin
                        },
                        {
                            Id: 3,
                            FirstName: "ccccc",
                            LastName: "ccccc",
                            UserName: "ccccc",
                            Email: "ccccc",
                            Password: "ccccc",
                            UserType: userType_1.UserType.Tenant
                        },
                        {
                            Id: 4,
                            FirstName: "ddddd",
                            LastName: "ddddd",
                            UserName: "ddddd",
                            Email: "ddddd",
                            Password: "ddddd",
                            UserType: userType_1.UserType.Admin
                        }
                    ];
                    this.messages = [
                        {
                            Id: 1,
                            Text: "Hello",
                            Date: new Date(),
                            User: this.users[1],
                            ConversationId: 1
                        },
                        {
                            Id: 2,
                            Text: "How are you?",
                            Date: new Date(),
                            User: this.users[1],
                            ConversationId: 1
                        },
                        {
                            Id: 3,
                            Text: "Hello",
                            Date: new Date(),
                            User: this.users[0],
                            ConversationId: 1
                        },
                        {
                            Id: 4,
                            Text: "I am fine",
                            Date: new Date(),
                            User: this.users[0],
                            ConversationId: 1
                        },
                        {
                            Id: 5,
                            Text: "I am glad for you! Have a good day.",
                            Date: new Date(),
                            User: this.users[1],
                            ConversationId: 1
                        },
                        {
                            Id: 1,
                            Text: "Hello",
                            Date: new Date(),
                            User: this.users[1],
                            ConversationId: 1
                        },
                        {
                            Id: 2,
                            Text: "How are you?",
                            Date: new Date(),
                            User: this.users[1],
                            ConversationId: 1
                        },
                        {
                            Id: 3,
                            Text: "Hello",
                            Date: new Date(),
                            User: this.users[0],
                            ConversationId: 1
                        },
                        {
                            Id: 4,
                            Text: "I am fine",
                            Date: new Date(),
                            User: this.users[0],
                            ConversationId: 1
                        },
                        {
                            Id: 5,
                            Text: "I am glad for you! Have a good day.",
                            Date: new Date(),
                            User: this.users[1],
                            ConversationId: 1
                        }
                    ];
                    this.events = [
                        {
                            Id: 1,
                            Title: "Cerinta 1",
                            Description: "Very good",
                            Location: "Cluj-Napoca, Observator 34",
                            User: this.users[0],
                            Date: new Date()
                        },
                        {
                            Id: 2,
                            Title: "Cerinta 1",
                            Description: "Very good",
                            Location: "Cluj-Napoca, Observator 34",
                            User: this.users[1],
                            Date: new Date()
                        },
                        {
                            Id: 3,
                            Title: "Cerinta 1",
                            Description: "Very good",
                            Location: "Cluj-Napoca, Observator 34",
                            User: this.users[2],
                            Date: new Date()
                        },
                        {
                            Id: 4,
                            Title: "Cerinta 1",
                            Description: "Very good",
                            Location: "Cluj-Napoca, Observator 34",
                            User: this.users[3],
                            Date: new Date()
                        },
                        {
                            Id: 5,
                            Title: "Cerinta 1",
                            Description: "Very good",
                            Location: "Cluj-Napoca, Observator 34",
                            User: this.users[0],
                            Date: new Date()
                        },
                        {
                            Id: 6,
                            Title: "Cerinta 1",
                            Description: "Very good",
                            Location: "Cluj-Napoca, Observator 34",
                            User: this.users[0],
                            Date: new Date()
                        },
                    ];
                    this.events1 = [
                        {
                            Id: 1,
                            Title: "Cerinta 1",
                            Description: "Very good",
                            Location: "Cluj-Napoca, Observator 34",
                            User: this.users[0],
                            Date: new Date()
                        }
                    ];
                }
                GetAllUsers() {
                    return this.users;
                }
                GetUser(id) {
                    return this.users[0];
                }
                PostMessage(message) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(message);
                    return Object.assign({}, message);
                    //return this.http.post("http://localhost:61957/api/messenger/SendMessage", body, options).map(res => res.json()).toPromise();
                }
                GetMessages(conversationId) {
                    return this.messages;
                    //return this.http.get('http://localhost:61957/api/messenger/GetMessages/', conversationId).map(res => res.json()).toPromise();
                }
                GetOrCreateConversation(userOneId, userTwoId) {
                    return 1;
                    //return this.http.get('http://localhost:61957/api/messenger/GetConversation/' + '/' + userOneId + '/' 
                    //        + userTwoId).map(res => res.json()).toPromise();
                }
                GetEventsByMonthAndYear(month, year) {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'Event/' + month + '/' + year)
                        .map(res => res.json()).toPromise();
                    /*var events = [];
                    if(month == 12)
                          return this.events;
                    else if(month == 11)
                          return this.events1;
                    else
                          return events;*/
                }
                CreateEvent(event) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(event);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + 'Event', body, options).map(res => res.json()).toPromise();
                    //return Object.assign({}, event);
                }
                DeleteEvent(eventId) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete(constants_1.Constants.API_ENDPOINT + 'Event/' + eventId, options)
                        .map(res => res.json()).toPromise();
                }
            };
            TenantHomeService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], TenantHomeService);
            exports_1("TenantHomeService", TenantHomeService);
        }
    };
});
//# sourceMappingURL=tenant-home.service.js.map