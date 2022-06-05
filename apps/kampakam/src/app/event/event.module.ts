import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { NavbarModule } from '../navbar/navbar.module';
import {DataViewModule} from 'primeng/dataview';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    NavbarModule,
    DataViewModule,
    FormsModule,
    CalendarModule,
  ],
  exports:[
    EventComponent
  ]
})
export class EventModule { }
