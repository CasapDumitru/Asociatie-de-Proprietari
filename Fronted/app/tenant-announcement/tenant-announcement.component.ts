import { Component } from "@angular/core";
import { TenantAnnouncementService } from './tenant-announcement.service'
import { Vote } from "../interfaces/vote";
import { Announcement } from "../interfaces/announcement";
import { User } from "../interfaces/user";
import { UserType } from "../interfaces/userType";
import { forEach } from "@angular/router/src/utils/collection";

@Component({
    selector: 'tenant-annoucement',
    templateUrl:"app/tenant-announcement/tenant-announcement.component.html",
    styleUrls:["app/tenant-announcement/tenant-announcement.style.css"],
    providers: [TenantAnnouncementService]
})

export class TenantAnnouncementComponent {

    constructor(private announcementService: TenantAnnouncementService) {}

    user: User = {
        Id : 1,
        FirstName : "aaaaa",
        LastName : "aaaaa",
        UserName : "aaaaa",
        Email : "aaaaa",
        Password: "aaaaa",
        UserType: UserType.Tenant
    }

    announcements: Announcement[];
    votes: Vote[];
    newAnnouncement: Announcement = {
        Id: 0,
        Title: '',
        Content: '',
        User: this.user,
        Date: new Date() 
    }
    newVote: Vote = {
        Id: 0,
        Content: '',
        User: this.user,
        Date: new Date(),
        Status: false,
        NumberOfVotes: 0
    }
    detailAnnouncement: Announcement;
    addAnnouncement: boolean = false;
    addVote: boolean = false;
    showAnnouncementDetails: boolean = false;
    votedAnnouncemnts: boolean[];
    ready : boolean = false;

    AddAnnouncementOnClick() {
        this.addVote = false;
        this.addAnnouncement = true;
    }

    AddVoteOnClick() {
        this.addAnnouncement = false;
        this.addVote = true;
    }

    VoteOnClick(index: number) {
        this.votedAnnouncemnts[index] = false;
    }

    HideDetails() {
        this.showAnnouncementDetails = false;
    }

    AnnouncementDetails(index: number) {
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
        }).catch( er => {
            console.log(er);
        })
       // var announcement = this.announcementService.AddAnnouncement(this.newAnnouncement);
        /*this.addAnnouncement = false;
        this.newAnnouncement.Title = '';
        this.newAnnouncement.Content = '';*/
    }

    AddVote() {
        this.announcementService.AddVote(this.newVote).then(vote => {
            this.votes.push(vote)
            this.addVote = false;
            this.newVote.Content = '';
            this.votedAnnouncemnts.push(true);
        }).catch( er => {
            console.log(er);
        })
    }

    GetAllVotes() {
        this.announcementService.GetAllVotes().then(votes => {
            this.votes = votes;
            this.ready = true;
        }).catch(er => {
            console.log(er);
        })
    }

    GetAllAnnouncements() {
        this.announcementService.GetAllAnnouncements().then(announcements => {
            this.announcements = announcements;
            console.log(announcements);
            //this.ready = true;
            this.GetAllVotes();
            this.votedAnnouncemnts = new Array(this.announcements.length);

            for(var i = 0; i < this.announcements.length; i++) {
                this.votedAnnouncemnts[i] = true;
            }
        }).catch( er => console.log("error"));
        //this.announcements = this.announcementService.GetAllAnnouncements();
    }

    DeleteAnnouncement(annoucement: Announcement, index: number) {

        if(confirm("Are you sure to delete this?")) {
            
            this.announcementService.DeleteAnnouncement(annoucement.Id).then(an => {
                this.announcements.splice(index, 1);
            }).catch(er => {
                console.log(er);
            })
        }
    }

    EditVote(vote: Vote, index: number) {
        this.votes[index].NumberOfVotes++;
        this.announcementService.EditVote(vote).then( vote => {
            console.log(vote);
        }).catch(er => {
            this.votes[index].NumberOfVotes--;
            console.log(er);
        })
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
}