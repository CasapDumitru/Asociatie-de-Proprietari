System.register(["@angular/core", "@angular/common", "@angular/router", "./tenant-announcement.component", "./../shared/shared-module", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, router_1, tenant_announcement_component_1, shared_module_1, forms_1, TenantAnnouncementModule;
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
            function (tenant_announcement_component_1_1) {
                tenant_announcement_component_1 = tenant_announcement_component_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            TenantAnnouncementModule = class TenantAnnouncementModule {
            };
            TenantAnnouncementModule = __decorate([
                core_1.NgModule({
                    declarations: [tenant_announcement_component_1.TenantAnnouncementComponent],
                    imports: [common_1.CommonModule, router_1.RouterModule, shared_module_1.SharedModule, forms_1.FormsModule]
                })
            ], TenantAnnouncementModule);
            exports_1("TenantAnnouncementModule", TenantAnnouncementModule);
        }
    };
});
//# sourceMappingURL=tenant-announcement.module.js.map