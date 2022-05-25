import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports:[
    EventComponent
  ]
})
export class EventModule { }
