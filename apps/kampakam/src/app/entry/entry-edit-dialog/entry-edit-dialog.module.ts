import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryEditDialogComponent } from './entry-edit-dialog.component';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [EntryEditDialogComponent],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports:[
    EntryEditDialogComponent
  ]
})
export class EntryEditDialogModule { }
