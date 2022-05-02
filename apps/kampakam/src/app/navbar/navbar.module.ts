import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { NavbarComponent } from './navbar.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MegaMenuModule, ButtonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
