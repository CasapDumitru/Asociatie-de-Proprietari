System.register(["@angular/core", "./tenant-announcement.service", "../interfaces/userType"], function (exports_1, context_1) {
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
    var core_1, tenant_announcement_service_1, userType_1, TenantAnnouncementComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tenant_announcement_service_1_1) {
                tenant_announcement_service_1 = tenant_announcement_service_1_1;
            },
            function (userType_1_1) {
                userType_1 = userType_1_1;
            }
        ],
        execute: function () {
            TenantAnnouncementComponent = class TenantAnnouncementComponent {
                constructor(announcementService) {
                    this.announcementService = announcementService;
                    this.user = {
                        Id: 1,
                        FirstName: "aaaaa",
                        LastName: "aaaaa",
                        UserName: "aaaaa",
                        Email: "aaaaa",
                        Password: "aaaaa",
                        UserType: userType_1.UserType.Tenant
                    };
                    this.newAnnouncement = {
                        Id: 0,
                        Title: '',
                        Content: '',
                        User: this.user,
                        Date: new Date()
                    };
                    this.newVote = {
                        Id: 0,
                        Content: '',
                        User: this.user,
                        Date: new Date(),
                        Status: false,
                        NumberOfVotes: 0
                    };
                    this.addAnnouncement = false;
                    this.addVote = false;
                    this.showAnnouncementDetails = false;
                    this.ready = false;
                }
                AddAnnouncementOnClick() {
                    this.addVote = false;
                    this.addAnnouncement = true;
                }
                AddVoteOnClick() {
                    this.addAnnouncement = false;
                    this.addVote = true;
                }
                VoteOnClick(index) {
                    this.votedAnnouncemnts[index] = false;
                }
                HideDetails() {
                    this.showAnnouncementDetails = false;
                }
                AnnouncementDetails(index) {
                    this.showAnnouncementDetails = true;
                    this.detailAnnouncement = Object.assign({}, this.announcements[index]);
                }
                AddAnnouncement() {
                    this.announcementService.AddAnnouncement(this.newAnnouncement).then(an => {
                        console.log(an);
                        this.announcements.push(an);
                        this.addAnnouncement = false;
                        this.newAnnouncement.Title = '';
                        this.newAnnouncement.Content = '';
                    }).catch(er => {
                        console.log(er);
                    });
                    // var announcement = this.announcementService.AddAnnouncement(this.newAnnouncement);
                    /*this.addAnnouncement = false;
                    this.newAnnouncement.Title = '';
                    this.newAnnouncement.Content = '';*/
                }
                AddVote() {
                    this.announcementService.AddVote(this.newVote).then(vote => {
                        this.votes.push(vote);
                        this.addVote = false;
                        this.newVote.Content = '';
                        this.votedAnnouncemnts.push(true);
                    }).catch(er => {
                        console.log(er);
                    });
                }
                GetAllVotes() {
                    this.announcementService.GetAllVotes().then(votes => {
                        this.votes = votes;
                        this.ready = true;
                    }).catch(er => {
                        console.log(er);
                    });
                }
                GetAllAnnouncements() {
                    this.announcementService.GetAllAnnouncements().then(announcements => {
                        this.announcements = announcements;
                        console.log(announcements);
                        //this.ready = true;
                        this.GetAllVotes();
                        this.votedAnnouncemnts = new Array(this.announcements.length);
                        for (var i = 0; i < this.announcements.length; i++) {
                            this.votedAnnouncemnts[i] = true;
                        }
                    }).catch(er => console.log("error"));
                    //this.announcements = this.announcementService.GetAllAnnouncements();
                }
                DeleteAnnouncement(annoucement, index) {
                    if (confirm("Are you sure to delete this?")) {
                        this.announcementService.DeleteAnnouncement(annoucement.Id).then(an => {
                            this.announcements.splice(index, 1);
                        }).catch(er => {
                            console.log(er);
                        });
                    }
                }
                EditVote(vote, index) {
                    this.votes[index].NumberOfVotes++;
                    this.announcementService.EditVote(vote).then(vote => {
                        console.log(vote);
                    }).catch(er => {
                        this.votes[index].NumberOfVotes--;
                        console.log(er);
                    });
                }
                ngOnInit() {
                    this.GetAllAnnouncements();
                    //this.GetAllVotes();
                    /*this.votedAnnouncemnts = new Array(this.announcements.length);
            
                    for(var i = 0; i < this.announcements.length; i++) {
                        this.votedAnnouncemnts[i] = true;
                    }*/
                    console.log(this.votedAnnouncemnts);
                }
            };
            TenantAnnouncementComponent = __decorate([
                core_1.Component({
                    selector: 'tenant-annoucement',
                    templateUrl: "app/tenant-announcement/tenant-announcement.component.html",
                    styleUrls: ["app/tenant-announcement/tenant-announcement.style.css"],
                    providers: [tenant_announcement_service_1.TenantAnnouncementService]
                }),
                __metadata("design:paramtypes", [tenant_announcement_service_1.TenantAnnouncementService])
            ], TenantAnnouncementComponent);
            exports_1("TenantAnnouncementComponent", TenantAnnouncementComponent);
        }
    };
});
//# sourceMappingURL=tenant-announcement.component.js.map