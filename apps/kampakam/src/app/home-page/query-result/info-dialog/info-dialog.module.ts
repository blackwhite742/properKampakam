import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, Dialog } from 'primeng/dialog';
import { InfoDialogComponent } from './info-dialog.component';
import { FormsModule } from '@angular/forms';
import { EntryModule } from '../../../entry/entry.module';


@NgModule({
  declarations: [InfoDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    EntryModule
  ],
  exports: [InfoDialogComponent],
})
export class InfoDialogModule { }
