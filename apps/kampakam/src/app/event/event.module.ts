import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { NavbarModule } from '../navbar/navbar.module';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    NavbarModule,
    DataViewModule
  ],
  exports:[
    EventComponent
  ]
})
export class EventModule { }
