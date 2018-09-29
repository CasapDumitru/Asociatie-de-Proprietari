import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartPageComponent } from './start-page.component';

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, FormsModule]
})

export class StartPageModule { }