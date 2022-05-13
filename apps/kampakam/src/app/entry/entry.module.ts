import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import {ButtonModule} from 'primeng/button';
import { EntryEditDialogModule } from './entry-edit-dialog/entry-edit-dialog.module';


@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    ButtonModule,
    EntryEditDialogModule
  ],
  exports:[EntryComponent]
})
export class EntryModule { }
