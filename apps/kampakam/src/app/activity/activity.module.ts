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
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import { QueryResultModule } from './query-result/query-result.module';
import {TableModule} from 'primeng/table';
import { NavbarModule } from '../navbar/navbar.module';


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
    NavbarModule
  ]
})
export class ActivityModule { }
