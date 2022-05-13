import { Component, OnInit, Input, OnChanges,SimpleChanges,EventEmitter,Output } from '@angular/core';
import { EntryInterface } from '../../../assets/interfaces/entry.interface';

@Component({
  selector: 'kampakam-entry-edit-dialog',
  templateUrl: './entry-edit-dialog.component.html',
  styleUrls: ['./entry-edit-dialog.component.scss']
})
export class EntryEditDialogComponent implements OnInit,OnChanges {

  @Input()entryData:EntryInterface;
  @Input()display=false;
  @Output()displayChange=new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges){
    console.log("Changes in entry edit dialog",changes);
    if(changes['entryData'] != undefined && !changes['entryData']['firstChange'])
      this.display=true;
  }

  hideDialog(){
    this.display=true;
    this.displayChange.emit();
  }

}
