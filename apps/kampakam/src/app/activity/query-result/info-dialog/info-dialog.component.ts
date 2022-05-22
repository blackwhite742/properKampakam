import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { EntryInterface } from '../../../../assets/interfaces/entry.interface';

@Component({
  selector: 'kampakam-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit, OnChanges {

  @Input()entryData:number;
  display = false;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges){
    if(!changes['entryData']['firstChange'])
      this.display=true;
  }

}
