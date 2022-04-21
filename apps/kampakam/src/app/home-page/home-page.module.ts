import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class HomePageModule { }
