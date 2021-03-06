import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ActivityComponent } from './activity.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {TreeSelectModule} from 'primeng/treeselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import { QueryResultModule } from './query-result/query-result.module';
import {TableModule} from 'primeng/table';
import { NavbarModule } from '../navbar/navbar.module';
import { MapaModule } from '../mapa/mapa.module';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ActivityService } from './activity.service';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule,
    MultiSelectModule,
    TreeSelectModule,
    InputSwitchModule,
    DropdownModule,
    ListboxModule,
    QueryResultModule,
    TableModule,
    NavbarModule,
    MapaModule,
    SelectButtonModule,
    AutoCompleteModule,
    TagModule
  ],
  providers:[
    ActivityService
  ]
})
export class ActivityModule { }
