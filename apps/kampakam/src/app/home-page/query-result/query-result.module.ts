import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { QueryResultComponent } from './query-result.component';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  declarations: [QueryResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    DataViewModule
  ],
  exports: [QueryResultComponent]
})
export class QueryResultModule { }
