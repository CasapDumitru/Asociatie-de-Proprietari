import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { TenantHomeComponent } from './tenant-home.component'
import { TenantAnnouncementComponent } from './../tenant-announcement/tenant-announcement.component'
import { TenantRequirementComponent } from './../tenant-requirement/tenant-requirement.component'
import { TenantPaymentComponent } from './../tenant-payment/tenant-payment.component'
import { TenantSmartHomeComponent } from './../tenant-smart-home/tenant-smart-home.component'

const homeRoutes: Routes = [
  {
    path: '',
    component: TenantHomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'announcement', component: TenantAnnouncementComponent},
          { path: 'requirement', component: TenantRequirementComponent},
          { path: 'payment', component: TenantPaymentComponent},
          { path: 'smartHome', component: TenantSmartHomeComponent},
        ]
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule] 
})
export class TenantHomeRoutingModule {

}