import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HomePageComponent } from './home-page.component';
import {MegaMenuModule} from 'primeng/megamenu';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MegaMenuModule
  ]
})
export class HomePageModule { }
