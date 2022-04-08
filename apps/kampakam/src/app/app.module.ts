import { AddToDbModule } from './addToDb/add-to-db.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import "reflect-metadata";
import { AddToDbComponent } from './addToDb/add-to-db.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AddToDbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'addToDb',component:AddToDbComponent}
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
