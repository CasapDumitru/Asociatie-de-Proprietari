import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminAnnouncementComponent } from './admin-announcement.component';
import { SharedModule } from './../shared/shared-module';

@NgModule({
  declarations: [AdminAnnouncementComponent],
  imports: [CommonModule,RouterModule,FormsModule,SharedModule]
})

export class AdminAnnouncementModule { }
