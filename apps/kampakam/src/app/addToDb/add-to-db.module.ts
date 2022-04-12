import { AddToDbComponent } from './add-to-db.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [AddToDbComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    MultiSelectModule
  ],
  exports:[

  ]
})
export class AddToDbModule { }
