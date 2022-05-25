import { Component,Input, OnInit} from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'kampakam-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit {

  @Input()data: any[];

  constructor(
    private activityService:ActivityService
  ) { }

  ngOnInit(): void {

  }


  getInfo(id:number){
    this.activityService.toggleDialog();
    this.activityService.setEntry(id)
  }

}
