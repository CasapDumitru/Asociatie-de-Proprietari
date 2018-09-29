import { Component } from "@angular/core";
import { TenantSmartHomeService } from './tenant-smart-home.service';
import { User } from'./../interfaces/user';
import { UserType } from './../interfaces/userType';
import { SmartHome} from'./../interfaces/smartHome';
import { NotifiedUser } from'./../interfaces/notifiedUser';
import { NotifUser } from'./../interfaces/notifUser';

@Component({
    selector: 'tenant-smart-home',
    templateUrl:"app/tenant-smart-home/tenant-smart-home.component.html",
    styleUrls:["app/tenant-smart-home/tenant-smart-home.style.css"],
    providers:[TenantSmartHomeService]
})

export class TenantSmartHomeComponent {

    constructor(private smartHomeService: TenantSmartHomeService) {}

    currentUser: User;
    smartHome: SmartHome;
    notifiedTenants: NotifiedUser[];
    tenants: User[];
    notifUsers: NotifUser[] = [];
    ip: string = "";
    showConfigure: boolean = false;
    ready: boolean = true;

    CreateSmartHome() {
        this.smartHome = {
            Id : 0,
            Ip : this.ip,
            User : this.currentUser,
            IsActivated : false
        }
        console.log(this.smartHome);
        this.smartHomeService.CreateSmartHome(this.smartHome).then(smHome => {
            console.log(smHome);
            this.smartHome = smHome;
            console.log(this.smartHome);
            this.GetNotificatedUsers();
            this.GetTenants();
        }).catch(er => {
            console.log(er);
        })
        
        //console.log(this.ip);
    }

    Activate(value: boolean) {
        console.log(value);
        this.smartHome.IsActivated = value;
        this.smartHomeService.EditSmartHome(this.smartHome);
    }

    Delete() {
        if(confirm("Are you sure to delete the smart home?")) {
            this.smartHomeService.DeleteSmartHome(this.smartHome.Id).then(sm => {
                this.smartHome = null;
            }).catch(er => {
                console.log(er);
            })
            //this.smartHome = null;
        }
        
    }

    Configure() {
        this.showConfigure = true;
    }

    GetNotificatedUsers() {
        this.notifiedTenants = this.smartHomeService.GetAllNotifiedTenants();
    }

    IsNotified(userId: number) {
        var val = false;
        this.notifiedTenants.forEach((t) => {
            if(t.User.Id == userId) {
                console.log(t.User.Id);
                val = true;
            }                  
        });
        return val;
    }

    AddOrDelete(user: User, val: boolean) {
        var v : boolean = true;

        for(var i=0; i<this.notifiedTenants.length;i++) {
            if(this.notifiedTenants[i].User.Id == user.Id) {
                v = false;
                if(val == false) {
                    this.smartHomeService.DeleteNotifiedTenant(this.notifiedTenants[i].Id);
                    this.notifiedTenants.splice(i,1);
                } 
            }  
        }
        if(v && val) {
            var notTen: NotifiedUser = {
                Id: 0,
                User: user,
                Date: new Date(),
                SmartHome: this.smartHome
            };
            var notif = this.smartHomeService.AddNotifiedTenant(notTen);
            this.notifiedTenants.push(notif);
        }
    }

    GetTenants() {
        this.tenants = this.smartHomeService.GetAllTenants();

        this.tenants.forEach((t) => {
            var n : NotifUser = {
                User: t,
                IsActivated: false
            };
            if(this.IsNotified(t.Id))
                n.IsActivated = true;
            this.notifUsers.push(n);
        });
    }

    ActivateNotif(index, value) {
        this.notifUsers[index].IsActivated = value;
    }

    GiveUp() {
        if(confirm("Are you sure to give up? All changes will not be saved")) {
            this.notifUsers = [];
            this.GetTenants();
            this.ip = this.smartHome.Ip;
            this.showConfigure = false;
        }
    }

    ApplyChanges() {
        if(confirm("Are you sure to apply all changes?")) {
            if(this.ip != this.smartHome.Ip) {
            this.smartHome.Ip = this.ip;
            this.smartHomeService.EditSmartHome(this.smartHome).then(smHome => {

            }).catch(er => {
                console.log(er);
            })   
        }

        this.notifUsers.forEach((t) => {
            this.AddOrDelete(t.User,t.IsActivated);
        })
        this.showConfigure = false;
        }
    }

    ngOnInit() {
        var userId = +localStorage.getItem("id_token");
        this.smartHomeService.GetUser(userId).then(u => {
            console.log(u);
            this.currentUser = u;
            this.smartHomeService.GetSmartHome(userId).then(smHome => {
                //this.smartHome.User = this.currentUser;
                this.smartHome = smHome;
            }).catch(er => {
                console.log(er);
            });
        }).catch(er => {
            console.log(er);
        })
        

        if(this.smartHome != null) {
            this.ip = this.smartHome.Ip;
            this.GetNotificatedUsers();
            this.GetTenants();
        }
    }

}