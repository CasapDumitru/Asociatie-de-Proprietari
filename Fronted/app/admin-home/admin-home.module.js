System.register(["@angular/core", "@angular/common", "@angular/router", "@angular/forms", "./admin-home.component", "./admin-home-routing.module", "./../admin-administrative-charges/admin-administrative-charges.module", "./../admin-announcement/admin-announcement.module", "./../admin-maintenance-situation/admin-maintenance-situation.module", "./../shared/shared-module", "ng2-datetime-picker"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, router_1, forms_1, admin_home_component_1, admin_home_routing_module_1, admin_administrative_charges_module_1, admin_announcement_module_1, admin_maintenance_situation_module_1, shared_module_1, ng2_datetime_picker_1, AdminHomeModule;
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
            function (admin_home_component_1_1) {
                admin_home_component_1 = admin_home_component_1_1;
            },
            function (admin_home_routing_module_1_1) {
                admin_home_routing_module_1 = admin_home_routing_module_1_1;
            },
            function (admin_administrative_charges_module_1_1) {
                admin_administrative_charges_module_1 = admin_administrative_charges_module_1_1;
            },
            function (admin_announcement_module_1_1) {
                admin_announcement_module_1 = admin_announcement_module_1_1;
            },
            function (admin_maintenance_situation_module_1_1) {
                admin_maintenance_situation_module_1 = admin_maintenance_situation_module_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (ng2_datetime_picker_1_1) {
                ng2_datetime_picker_1 = ng2_datetime_picker_1_1;
            }
        ],
        execute: function () {
            AdminHomeModule = class AdminHomeModule {
            };
            AdminHomeModule = __decorate([
                core_1.NgModule({
                    declarations: [admin_home_component_1.AdminHomeComponent],
                    imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, admin_home_routing_module_1.AdminHomeRoutingModule, admin_administrative_charges_module_1.AdminAdministrativeChargesModule, admin_announcement_module_1.AdminAnnouncementModule,
                        admin_maintenance_situation_module_1.AdminMaintenanceSituationModule, shared_module_1.SharedModule, ng2_datetime_picker_1.Ng2DatetimePickerModule]
                })
            ], AdminHomeModule);
            exports_1("AdminHomeModule", AdminHomeModule);
        }
    };
});
//# sourceMappingURL=admin-home.module.js.map