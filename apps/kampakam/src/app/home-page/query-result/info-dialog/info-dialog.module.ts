import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import { InfoDialogComponent } from './info-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InfoDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule
  ],
  exports: [InfoDialogComponent]
})
export class InfoDialogModule { }
