import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MegaMenuModule} from 'primeng/megamenu';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MegaMenuModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
