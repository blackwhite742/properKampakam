import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { AddToDbComponent } from './addToDb/add-to-db.component';
import { EntryComponent } from './entry/entry.component';
import { MapaComponent } from './mapa/mapa.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'activityHomePage',
    component: ActivityComponent,
    data: { animation: 'isLeft' },
  },
  { path: 'addToDb', component: AddToDbComponent },
  {
    path: 'entry/:id',
    component: EntryComponent,
  },
  { path: 'mapa', component: MapaComponent },
  {
    path: 'events',
    component: EventComponent,
    data: { animation: 'isRight'}
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
