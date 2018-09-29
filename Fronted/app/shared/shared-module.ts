import { NgModule } from '@angular/core';
import { DateFormatPipe } from './../pipes/dateFormatPipe';
import { DateTimeFormatPipe } from './../pipes/dateTimeFormatPipe';

@NgModule({
  declarations: [DateFormatPipe,DateTimeFormatPipe],
  exports: [DateFormatPipe,DateTimeFormatPipe]
})

export class SharedModule { }