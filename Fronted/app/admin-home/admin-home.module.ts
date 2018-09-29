import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home.component';
import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminAdministrativeChargesModule } from './../admin-administrative-charges/admin-administrative-charges.module'
import { AdminAnnouncementModule } from './../admin-announcement/admin-announcement.module'
import { AdminMaintenanceSituationModule } from './../admin-maintenance-situation/admin-maintenance-situation.module'
import { SharedModule } from './../shared/shared-module';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [CommonModule,RouterModule,FormsModule,AdminHomeRoutingModule,AdminAdministrativeChargesModule,AdminAnnouncementModule,
            AdminMaintenanceSituationModule,SharedModule,Ng2DatetimePickerModule]
})

export class AdminHomeModule { }