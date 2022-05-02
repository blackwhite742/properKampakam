import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HomePageComponent } from './home-page.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {TreeSelectModule} from 'primeng/treeselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule,
    MultiSelectModule,
    TreeSelectModule,
    InputSwitchModule,
    DropdownModule
  ]
})
export class HomePageModule { }
