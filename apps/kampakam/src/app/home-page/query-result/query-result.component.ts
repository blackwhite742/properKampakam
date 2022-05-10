import { Component,Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'kampakam-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit,OnChanges {

  @Input()data: any[];

  @Input()display: boolean; // TODO two way binding

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Change detected",changes);
  }

  ngOnInit(): void {

  }

}
