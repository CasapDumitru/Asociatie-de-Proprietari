import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TenantHomeComponent } from './tenant-home.component';
import { TenantHomeRoutingModule } from './tenant-home-routing.module';
import { TenantAnnouncementModule } from './../tenant-announcement/tenant-announcement.module'
import { TenantRequirementModule } from './../tenant-requirement/tenant-requirement.module'
import { TenantPaymentModule } from './../tenant-payment/tenant-payment.module'
import { TenantSmartHomeModule } from './../tenant-smart-home/tenant-smart-home.module'
import { SharedModule } from './../shared/shared-module';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

@NgModule({
  declarations: [TenantHomeComponent],
  imports: [CommonModule,RouterModule,FormsModule,TenantHomeRoutingModule,SharedModule,
            TenantAnnouncementModule,TenantRequirementModule,TenantPaymentModule,TenantSmartHomeModule,Ng2DatetimePickerModule]
})

export class TenantHomeModule { }