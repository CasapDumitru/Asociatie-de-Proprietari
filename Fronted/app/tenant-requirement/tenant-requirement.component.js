System.register(["@angular/core", "./tenant-requirement.service"], function (exports_1, context_1) {
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
    var core_1, tenant_requirement_service_1, TenantRequirementComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tenant_requirement_service_1_1) {
                tenant_requirement_service_1 = tenant_requirement_service_1_1;
            }
        ],
        execute: function () {
            TenantRequirementComponent = class TenantRequirementComponent {
                constructor(requirementService) {
                    this.requirementService = requirementService;
                    this.newRequirement = {
                        Id: 0,
                        Name: "",
                        Description: "",
                        User: null,
                        Date: new Date()
                    };
                    this.showDetails = false;
                    this.editRequirement = false;
                    this.indexRequirement = -1;
                    this.ready = false;
                }
                GetAllRequirements() {
                    this.requirementService.GetAllRequirements().then(req => {
                        this.requirements = req;
                        this.ready = true;
                    }).catch(er => {
                        console.log(er);
                    });
                }
                CreateRequirement() {
                    this.newRequirement.User = this.user;
                    this.requirementService.CreateRequirement(this.newRequirement).then(req => {
                        this.requirements.push(req);
                        this.newRequirement.Name = "";
                        this.newRequirement.Description = "";
                    }).catch(er => {
                        console.log(er);
                    });
                }
                OpenDetails(index) {
                    this.indexRequirement = index;
                    if (this.requirements[index].User.Id == this.user.Id) {
                        this.showDetails = true;
                        this.editRequirement = true;
                        this.detailRequirement = Object.assign({}, this.requirements[index]);
                    }
                    else {
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
                    if (confirm("Are you sure to delete this requirement?")) {
                        this.requirementService.DeleteRequirement(this.detailRequirement).then(req => {
                            this.requirements.splice(this.indexRequirement, 1);
                            this.showDetails = false;
                        }).catch(er => {
                            console.log(er);
                        });
                    }
                }
                Edit() {
                    this.requirementService.EditRequirement(this.detailRequirement).then(req => {
                        let copy = Object.assign({}, this.detailRequirement);
                        this.requirements[this.indexRequirement] = copy;
                    }).catch(er => {
                        console.log(er);
                    });
                }
                ngOnInit() {
                    this.GetAllRequirements();
                    this.requirementService.GetUserById(+localStorage.getItem('id_token')).then(user => {
                        this.user = user;
                    }).catch(er => {
                        console.log(er);
                    });
                }
            };
            TenantRequirementComponent = __decorate([
                core_1.Component({
                    selector: 'tenant-requirement',
                    templateUrl: "app/tenant-requirement/tenant-requirement.component.html",
                    styleUrls: ["app/tenant-requirement/tenant-requirement.style.css"],
                    providers: [tenant_requirement_service_1.TenantRequirementService]
                }),
                __metadata("design:paramtypes", [tenant_requirement_service_1.TenantRequirementService])
            ], TenantRequirementComponent);
            exports_1("TenantRequirementComponent", TenantRequirementComponent);
        }
    };
});
//# sourceMappingURL=tenant-requirement.component.js.map