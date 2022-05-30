import { AddToDbComponent } from './add-to-db.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TreeSelectModule } from 'primeng/treeselect';
import { MessageService } from 'primeng/api';
import { NavbarModule } from '../navbar/navbar.module';
import {ChipsModule} from 'primeng/chips';

@NgModule({
  declarations: [AddToDbComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    MultiSelectModule,
    SelectButtonModule,
    InputSwitchModule,
    TreeSelectModule,
    NavbarModule,
    ChipsModule
  ],
  exports: [AddToDbComponent],
  providers:[MessageService]
})
export class AddToDbModule {}
