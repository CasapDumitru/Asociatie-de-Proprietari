System.register(["@angular/core", "@angular/http", "rxjs/Rx", "../interfaces/userType", "./../shared/constants"], function (exports_1, context_1) {
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
    var core_1, http_1, http_2, userType_1, constants_1, TenantAnnouncementService;
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
            TenantAnnouncementService = class TenantAnnouncementService {
                constructor(http) {
                    this.http = http;
                    this.user1 = {
                        Id: 2,
                        FirstName: "bbbbb",
                        LastName: "bbbbb",
                        UserName: "bbbbb",
                        Email: "bbbbb",
                        Password: "bbbbb",
                        UserType: userType_1.UserType.Tenant
                    };
                    this.user2 = {
                        Id: 1,
                        FirstName: "aaaaa",
                        LastName: "aaaaa",
                        UserName: "aaaaa",
                        Email: "aaaaa",
                        Password: "aaaaa",
                        UserType: userType_1.UserType.Tenant
                    };
                    this.votes = [
                        {
                            Id: 1,
                            Content: "Random vote 1",
                            Date: new Date(),
                            NumberOfVotes: 0,
                            Status: false,
                            User: this.user1
                        },
                        {
                            Id: 2,
                            Content: "Random vote 2",
                            Date: new Date(),
                            NumberOfVotes: 10,
                            Status: false,
                            User: this.user1
                        },
                        {
                            Id: 3,
                            Content: "Random vote 3",
                            Date: new Date(),
                            NumberOfVotes: 30,
                            Status: true,
                            User: this.user2
                        }
                    ];
                    this.announcements = [
                        {
                            Id: 1,
                            Title: "Random announcement 1",
                            Content: "Lorem ipsum nr 1",
                            Date: new Date(),
                            User: this.user2
                        },
                        {
                            Id: 2,
                            Title: "Random announcement 2",
                            Content: "Lorem ipsum nr 2",
                            Date: new Date(),
                            User: this.user1
                        },
                        {
                            Id: 3,
                            Title: "Random announcement 3",
                            Content: "Lorem ipsum nr 3",
                            Date: new Date(),
                            User: this.user2
                        }
                    ];
                }
                GetAllVotes() {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'Vote')
                        .map(res => res.json()).toPromise();
                }
                GetAllAnnouncements() {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'Announcement')
                        .map(res => res.json()).toPromise();
                }
                AddVote(vote) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(vote);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + 'Vote', body, options).map(res => res.json()).toPromise();
                }
                AddAnnouncement(announcement) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(announcement);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + 'Announcement', body, options).map(res => res.json()).toPromise();
                }
                EditVote(vote) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(vote);
                    return this.http.put(constants_1.Constants.API_ENDPOINT + "Vote/" + vote.Id, body, options).map(res => res.json()).toPromise();
                }
                DeleteAnnouncement(id) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete(constants_1.Constants.API_ENDPOINT + 'Announcement/' + id, options)
                        .map(res => res.json()).toPromise();
                }
            };
            TenantAnnouncementService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], TenantAnnouncementService);
            exports_1("TenantAnnouncementService", TenantAnnouncementService);
        }
    };
});
//# sourceMappingURL=tenant-announcement.service.js.map