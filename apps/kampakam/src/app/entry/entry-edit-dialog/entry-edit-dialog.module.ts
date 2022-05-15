import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryEditDialogComponent } from './entry-edit-dialog.component';
import {DialogModule} from 'primeng/dialog';
import {AddToDbModule} from '../../addToDb/add-to-db.module'

@NgModule({
  declarations: [EntryEditDialogComponent],
  imports: [
    CommonModule,
    DialogModule,
    AddToDbModule
  ],
  exports:[
    EntryEditDialogComponent
  ]
})
export class EntryEditDialogModule { }
