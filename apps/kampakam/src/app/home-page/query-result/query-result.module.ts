import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { QueryResultComponent } from './query-result.component';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [QueryResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    DataViewModule,
    ButtonModule
  ],
  exports: [QueryResultComponent]
})
export class QueryResultModule { }
