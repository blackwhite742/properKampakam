import { AddToDbModule } from './addToDb/add-to-db.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import "reflect-metadata";
import { AddToDbComponent } from './addToDb/add-to-db.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from "./home-page/home-page.component";
import { HomePageModule } from './home-page/home-page.module';
import { AppRoutingModule } from './app-routing.module';
import { EntryComponent } from './entry/entry.component';
import {MegaMenuModule} from 'primeng/megamenu';



@NgModule({
  declarations: [AppComponent, EntryComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AddToDbModule,
    HomePageModule,
    BrowserAnimationsModule,
    /*RouterModule.forRoot([
      {path:'',component:HomePageComponent},
      {path:'addToDb',component:AddToDbComponent}
    ]),*/
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
