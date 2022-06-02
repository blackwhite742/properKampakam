import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import {ButtonModule} from 'primeng/button';
import { EntryEditDialogModule } from './entry-edit-dialog/entry-edit-dialog.module';
import { NavbarModule } from '../navbar/navbar.module';
import {GalleriaModule} from 'primeng/galleria';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    ButtonModule,
    EntryEditDialogModule,
    NavbarModule,
    GalleriaModule,
    TagModule
  ],
  exports:[EntryComponent]
})
export class EntryModule { }
