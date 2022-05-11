import { Component,Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kampakam-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit,OnChanges {

  @Input()data: any[];

  @Input()display: boolean; // TODO two way binding
  @Output()displayChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    //console.log("Change detected",changes);
  }

  ngOnInit(): void {

  }

  toggleDialog(){
    this.display=false;
    this.displayChange.emit(this.display);
  }

}
