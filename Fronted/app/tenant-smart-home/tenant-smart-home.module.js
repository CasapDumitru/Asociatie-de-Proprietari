System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "./tenant-smart-home.component", "./../shared/shared-module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, tenant_smart_home_component_1, shared_module_1, TenantSmartHomeModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tenant_smart_home_component_1_1) {
                tenant_smart_home_component_1 = tenant_smart_home_component_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            }
        ],
        execute: function () {
            TenantSmartHomeModule = class TenantSmartHomeModule {
            };
            TenantSmartHomeModule = __decorate([
                core_1.NgModule({
                    declarations: [tenant_smart_home_component_1.TenantSmartHomeComponent],
                    imports: [common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, shared_module_1.SharedModule]
                })
            ], TenantSmartHomeModule);
            exports_1("TenantSmartHomeModule", TenantSmartHomeModule);
        }
    };
});
//# sourceMappingURL=tenant-smart-home.module.js.map