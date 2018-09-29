import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { TenantAnnouncementComponent } from './tenant-announcement.component';
import { SharedModule } from './../shared/shared-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TenantAnnouncementComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule]
})

export class TenantAnnouncementModule { }
