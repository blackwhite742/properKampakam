import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { NavbarModule } from '../navbar/navbar.module';
import {DataViewModule} from 'primeng/dataview';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    NavbarModule,
    DataViewModule,
    FormsModule,
    CalendarModule,
    TagModule,
    AutoCompleteModule
  ],
  exports:[
    EventComponent
  ]
})
export class EventModule { }
