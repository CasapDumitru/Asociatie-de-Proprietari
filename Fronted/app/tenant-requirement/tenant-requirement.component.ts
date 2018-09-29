import { Component } from "@angular/core";
import { TenantRequirementService } from './tenant-requirement.service';
import { Requirement } from './../interfaces/requirement';
import { User } from './../interfaces/user';

@Component({
    selector: 'tenant-requirement',
    templateUrl:"app/tenant-requirement/tenant-requirement.component.html",
    styleUrls:["app/tenant-requirement/tenant-requirement.style.css"],
    providers: [TenantRequirementService]
})

export class TenantRequirementComponent {

    constructor(private requirementService: TenantRequirementService) {}

    user: User;
    requirements: Requirement[];
    newRequirement: Requirement = {
        Id : 0,
        Name : "",
        Description : "",
        User : null,
        Date : new Date()
    };
    detailRequirement: Requirement;
    showDetails: boolean = false;
    editRequirement: boolean = false;
    indexRequirement: number = -1;
    ready: boolean = false;

    GetAllRequirements() {
        this.requirementService.GetAllRequirements().then(req => {
            this.requirements = req;
            this.ready = true;
        }).catch( er => {
            console.log(er);
        } )
    }

    CreateRequirement() {
        this.newRequirement.User = this.user;
        this.requirementService.CreateRequirement(this.newRequirement).then(req => {
            this.requirements.push(req);
            this.newRequirement.Name = "";
            this.newRequirement.Description = "";
        }).catch(er => {
            console.log(er);
        })
    }

    OpenDetails(index: number) {
        this.indexRequirement = index;
        if(this.requirements[index].User.Id == this.user.Id) {
            this.showDetails = true;
            this.editRequirement = true;
            this.detailRequirement = Object.assign({}, this.requirements[index]);
        } else {
            this.editRequirement = false;
            this.showDetails = true;
            this.detailRequirement = Object.assign({}, this.requirements[index]);
  
        }
    }

    HideDetails() {
        this.showDetails = false;
    }

    Delete() {
        console.log(this.indexRequirement);
        if(confirm("Are you sure to delete this requirement?")) {
            this.requirementService.DeleteRequirement(this.detailRequirement).then(req => {
                this.requirements.splice(this.indexRequirement,1);
                this.showDetails = false;
            }).catch(er => {
                console.log(er);
            })
        }
    }

    Edit() {
        this.requirementService.EditRequirement(this.detailRequirement).then(req => {
            let copy = Object.assign({}, this.detailRequirement);
            this.requirements[this.indexRequirement] = copy;
        }).catch(er => {
            console.log(er);
        })
        
    }

    ngOnInit() {
        this.GetAllRequirements();
        this.requirementService.GetUserById(+localStorage.getItem('id_token')).then(user => {
            this.user = user;
        }).catch(er => {
            console.log(er);
        })
    }

}