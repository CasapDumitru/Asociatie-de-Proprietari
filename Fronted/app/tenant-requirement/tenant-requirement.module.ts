import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TenantRequirementComponent } from './tenant-requirement.component';
import { SharedModule } from './../shared/shared-module';

@NgModule({
  declarations: [TenantRequirementComponent],
  imports: [CommonModule, RouterModule, FormsModule, SharedModule], 
})

export class TenantRequirementModule { }