import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddToDbComponent } from './addToDb/add-to-db.component';
import { EntryComponent } from './entry/entry.component';
import { MapaComponent } from './mapa/mapa.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'activityHomePage',
    component: HomePageComponent,
    data: { animation: 'isLeft' },
  },
  { path: 'addToDb', component: AddToDbComponent },
  {
    path: 'entry/:id',
    component: EntryComponent,
  },
  { path: 'mapa', component: MapaComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
