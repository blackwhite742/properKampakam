import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import "reflect-metadata";
import { AddRegionComponent } from './add-region/add-region.component';




@NgModule({
  declarations: [AppComponent, AddRegionComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule,
     RouterModule.forRoot([
       {path:'addRegion',component:AddRegionComponent}
     ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
