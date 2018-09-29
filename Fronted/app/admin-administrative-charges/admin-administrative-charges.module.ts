import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminAdministrativeChargesComponent } from './admin-administrative-charges.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminAdministrativeChargesComponent],
  imports: [CommonModule, RouterModule, FormsModule]
})

export class AdminAdministrativeChargesModule { }
