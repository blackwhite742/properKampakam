import { AddToDbModule } from './addToDb/add-to-db.module';
import { NgModule, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import 'reflect-metadata';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from './home-page/home-page.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MapaModule } from './mapa/mapa.module';
import { QueryResultModule } from './home-page/query-result/query-result.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AddToDbModule,
    HomePageModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    MapaModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
