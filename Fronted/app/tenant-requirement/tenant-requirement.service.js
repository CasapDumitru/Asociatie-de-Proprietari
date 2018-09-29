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
    var core_1, http_1, http_2, userType_1, constants_1, TenantRequirementService;
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
            TenantRequirementService = class TenantRequirementService {
                constructor(http) {
                    this.http = http;
                    this.user = {
                        Id: 1,
                        FirstName: "aaaaa",
                        LastName: "aaaaa",
                        UserName: "aaaaa",
                        Email: "aaaaa",
                        Password: "aaaaa",
                        UserType: userType_1.UserType.Tenant
                    };
                    this.user1 = {
                        Id: 2,
                        FirstName: "bbbbb",
                        LastName: "bbbbb",
                        UserName: "bbbbb",
                        Email: "bbbbb",
                        Password: "bbbbb",
                        UserType: userType_1.UserType.Tenant
                    };
                    this.requirements = [
                        {
                            Id: 1,
                            Name: "Cerinta 1",
                            Description: "Very good",
                            User: this.user,
                            Date: new Date()
                        },
                        {
                            Id: 2,
                            Name: "Cerinta 2",
                            Description: "Very good",
                            User: this.user,
                            Date: new Date()
                        },
                        {
                            Id: 3,
                            Name: "Cerinta 3",
                            Description: "Very good",
                            User: this.user1,
                            Date: new Date()
                        },
                        {
                            Id: 4,
                            Name: "Cerinta 4",
                            Description: "Very good",
                            User: this.user1,
                            Date: new Date()
                        },
                        {
                            Id: 5,
                            Name: "Cerinta 1",
                            Description: "Very good",
                            User: this.user,
                            Date: new Date()
                        },
                        {
                            Id: 6,
                            Name: "Cerinta 2",
                            Description: "Very good",
                            User: this.user,
                            Date: new Date()
                        },
                        {
                            Id: 7,
                            Name: "Cerinta 3",
                            Description: "Very good",
                            User: this.user1,
                            Date: new Date()
                        },
                        {
                            Id: 8,
                            Name: "Cerinta 4",
                            Description: "Very good",
                            User: this.user1,
                            Date: new Date()
                        },
                        {
                            Id: 9,
                            Name: "Cerinta 4",
                            Description: "Very good",
                            User: this.user1,
                            Date: new Date()
                        },
                        {
                            Id: 10,
                            Name: "Cerinta 1",
                            Description: "Very good",
                            User: this.user,
                            Date: new Date()
                        },
                        {
                            Id: 11,
                            Name: "Cerinta 2",
                            Description: "Very good",
                            User: this.user,
                            Date: new Date()
                        },
                        {
                            Id: 12,
                            Name: "Cerinta 3",
                            Description: "Very good",
                            User: this.user1,
                            Date: new Date()
                        },
                        {
                            Id: 13,
                            Name: "Cerinta 4",
                            Description: "Very good",
                            User: this.user1,
                            Date: new Date()
                        }
                    ];
                }
                GetAllRequirements() {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'Requirement')
                        .map(res => res.json()).toPromise();
                }
                GetUserById(id) {
                    return this.http.get(constants_1.Constants.API_ENDPOINT + 'User/' + id)
                        .map(res => res.json()).toPromise();
                }
                CreateRequirement(requirement) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(requirement);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + 'Requirement', body, options).map(res => res.json()).toPromise();
                }
                DeleteRequirement(requirement) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete(constants_1.Constants.API_ENDPOINT + 'Requirement/' + requirement.Id, options)
                        .map(res => res.json()).toPromise();
                }
                EditRequirement(requirement) {
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    let body = JSON.stringify(requirement);
                    return this.http.post(constants_1.Constants.API_ENDPOINT + "Requirement/" + requirement.Id, body, options).map(res => res.json()).toPromise();
                }
            };
            TenantRequirementService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], TenantRequirementService);
            exports_1("TenantRequirementService", TenantRequirementService);
        }
    };
});
//# sourceMappingURL=tenant-requirement.service.js.map