System.register(["@angular/core", "@angular/common", "@angular/router", "@angular/forms", "./tenant-home.component", "./tenant-home-routing.module", "./../tenant-announcement/tenant-announcement.module", "./../tenant-requirement/tenant-requirement.module", "./../tenant-payment/tenant-payment.module", "./../tenant-smart-home/tenant-smart-home.module", "./../shared/shared-module", "ng2-datetime-picker"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, router_1, forms_1, tenant_home_component_1, tenant_home_routing_module_1, tenant_announcement_module_1, tenant_requirement_module_1, tenant_payment_module_1, tenant_smart_home_module_1, shared_module_1, ng2_datetime_picker_1, TenantHomeModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (tenant_home_component_1_1) {
                tenant_home_component_1 = tenant_home_component_1_1;
            },
            function (tenant_home_routing_module_1_1) {
                tenant_home_routing_module_1 = tenant_home_routing_module_1_1;
            },
            function (tenant_announcement_module_1_1) {
                tenant_announcement_module_1 = tenant_announcement_module_1_1;
            },
            function (tenant_requirement_module_1_1) {
                tenant_requirement_module_1 = tenant_requirement_module_1_1;
            },
            function (tenant_payment_module_1_1) {
                tenant_payment_module_1 = tenant_payment_module_1_1;
            },
            function (tenant_smart_home_module_1_1) {
                tenant_smart_home_module_1 = tenant_smart_home_module_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (ng2_datetime_picker_1_1) {
                ng2_datetime_picker_1 = ng2_datetime_picker_1_1;
            }
        ],
        execute: function () {
            TenantHomeModule = class TenantHomeModule {
            };
            TenantHomeModule = __decorate([
                core_1.NgModule({
                    declarations: [tenant_home_component_1.TenantHomeComponent],
                    imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, tenant_home_routing_module_1.TenantHomeRoutingModule, shared_module_1.SharedModule,
                        tenant_announcement_module_1.TenantAnnouncementModule, tenant_requirement_module_1.TenantRequirementModule, tenant_payment_module_1.TenantPaymentModule, tenant_smart_home_module_1.TenantSmartHomeModule, ng2_datetime_picker_1.Ng2DatetimePickerModule]
                })
            ], TenantHomeModule);
            exports_1("TenantHomeModule", TenantHomeModule);
        }
    };
});
//# sourceMappingURL=tenant-home.module.js.map