import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddToDbComponent } from './addToDb/add-to-db.component';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'addToDb',component:AddToDbComponent},
  {
    path:'entry/:id',
    component:EntryComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
