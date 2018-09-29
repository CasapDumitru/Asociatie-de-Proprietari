import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { TenantPaymentComponent } from './tenant-payment.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared-module';


@NgModule({
  declarations: [TenantPaymentComponent],
  imports: [CommonModule,RouterModule,FormsModule,SharedModule]
})

export class TenantPaymentModule { }