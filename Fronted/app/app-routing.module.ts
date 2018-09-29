import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'
import { StartPageComponent } from './start-page/start-page.component'

export const routes: Routes = [
    
    {   path: '404', component: NotFoundComponent },
    {   path: 'login', component: StartPageComponent},
    {   path: '',   redirectTo: 'login', pathMatch: 'full' },
    {   path: 'tenantHome',
        loadChildren: 'app/tenant-home/tenant-home.module#TenantHomeModule'
    },
    {   path: 'adminHome',
        loadChildren: 'app/admin-home/admin-home.module#AdminHomeModule'
    },
    {   path: '**', redirectTo: '/404' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}