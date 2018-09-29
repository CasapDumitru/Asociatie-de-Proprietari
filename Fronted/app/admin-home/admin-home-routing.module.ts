import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component'
import { AdminAdministrativeChargesComponent } from './../admin-administrative-charges/admin-administrative-charges.component'
import { AdminAnnouncementComponent } from './../admin-announcement/admin-announcement.component'
import { AdminMaintenanceSituationComponent } from './../admin-maintenance-situation/admin-maintenance-situation.component'

const homeRoutes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'administrative', component: AdminAdministrativeChargesComponent},
          { path: 'announcement', component: AdminAnnouncementComponent},
          { path: 'maintenance', component: AdminMaintenanceSituationComponent},
        ]
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule] 
})
export class AdminHomeRoutingModule {

}