import { Component, OnInit, Input } from '@angular/core';
import { EntryInterface } from '../../../../assets/interfaces/entry.interface';

@Component({
  selector: 'kampakam-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  @Input()entryData:EntryInterface;
  display = false;

  constructor() { }

  ngOnInit(): void {

  }

}
