System.register(["@angular/core", "@angular/router", "./not-found/not-found.component", "./start-page/start-page.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, not_found_component_1, start_page_component_1, routes, AppRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (start_page_component_1_1) {
                start_page_component_1 = start_page_component_1_1;
            }
        ],
        execute: function () {
            exports_1("routes", routes = [
                { path: '404', component: not_found_component_1.NotFoundComponent },
                { path: 'login', component: start_page_component_1.StartPageComponent },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: 'tenantHome',
                    loadChildren: 'app/tenant-home/tenant-home.module#TenantHomeModule'
                },
                { path: 'adminHome',
                    loadChildren: 'app/admin-home/admin-home.module#AdminHomeModule'
                },
                { path: '**', redirectTo: '/404' }
            ]);
            AppRoutingModule = class AppRoutingModule {
            };
            AppRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forRoot(routes)],
                    exports: [router_1.RouterModule]
                })
            ], AppRoutingModule);
            exports_1("AppRoutingModule", AppRoutingModule);
        }
    };
});
//# sourceMappingURL=app-routing.module.js.map