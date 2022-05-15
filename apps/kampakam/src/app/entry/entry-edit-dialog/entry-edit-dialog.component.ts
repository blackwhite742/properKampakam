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

  @Output()entryDataChange=new EventEmitter(); // TODO consider creating a service with BehaviorSubject?
  @Output()displayChange=new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['entryData'] != undefined && !changes['entryData']['firstChange']){
      this.display=true;
      return
    }

  }

  hideDialog(){
    this.display=false;
    this.displayChange.emit(this.display);
  }

  editChange(data:any){
    this.entryData=data;
    this.entryDataChange.emit(data);
    this.hideDialog();
  }

}
