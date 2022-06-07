import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KontaktComponent } from './kontakt.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [KontaktComponent],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    InputTextareaModule,
    NavbarModule,
  ],
  exports: [KontaktComponent],
})
export class KontaktModule {}
