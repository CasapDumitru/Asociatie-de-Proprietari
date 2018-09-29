System.register(["@angular/core", "@angular/router", "./tenant-home.component", "./../tenant-announcement/tenant-announcement.component", "./../tenant-requirement/tenant-requirement.component", "./../tenant-payment/tenant-payment.component", "./../tenant-smart-home/tenant-smart-home.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, tenant_home_component_1, tenant_announcement_component_1, tenant_requirement_component_1, tenant_payment_component_1, tenant_smart_home_component_1, homeRoutes, TenantHomeRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tenant_home_component_1_1) {
                tenant_home_component_1 = tenant_home_component_1_1;
            },
            function (tenant_announcement_component_1_1) {
                tenant_announcement_component_1 = tenant_announcement_component_1_1;
            },
            function (tenant_requirement_component_1_1) {
                tenant_requirement_component_1 = tenant_requirement_component_1_1;
            },
            function (tenant_payment_component_1_1) {
                tenant_payment_component_1 = tenant_payment_component_1_1;
            },
            function (tenant_smart_home_component_1_1) {
                tenant_smart_home_component_1 = tenant_smart_home_component_1_1;
            }
        ],
        execute: function () {
            homeRoutes = [
                {
                    path: '',
                    component: tenant_home_component_1.TenantHomeComponent,
                    children: [
                        {
                            path: '',
                            children: [
                                { path: 'announcement', component: tenant_announcement_component_1.TenantAnnouncementComponent },
                                { path: 'requirement', component: tenant_requirement_component_1.TenantRequirementComponent },
                                { path: 'payment', component: tenant_payment_component_1.TenantPaymentComponent },
                                { path: 'smartHome', component: tenant_smart_home_component_1.TenantSmartHomeComponent },
                            ]
                        }
                    ]
                }
            ];
            TenantHomeRoutingModule = class TenantHomeRoutingModule {
            };
            TenantHomeRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forChild(homeRoutes)],
                    exports: [router_1.RouterModule]
                })
            ], TenantHomeRoutingModule);
            exports_1("TenantHomeRoutingModule", TenantHomeRoutingModule);
        }
    };
});
//# sourceMappingURL=tenant-home-routing.module.js.map