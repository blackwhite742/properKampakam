import { AddToDbModule } from './addToDb/add-to-db.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import 'reflect-metadata';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityModule } from './activity/activity.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MapaModule } from './mapa/mapa.module';
import { ToastModule } from 'primeng/toast';
import { MainService } from '../shared/services/main.service';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AddToDbModule,
    ActivityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    MapaModule,
    ToastModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
