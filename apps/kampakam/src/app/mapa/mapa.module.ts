import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa.component';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [MapaComponent],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [MapaComponent]
})
export class MapaModule { }
