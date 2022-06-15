import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'kampakam-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss'],
})
export class QueryResultComponent implements OnInit {
  @Input() data: any[];
  bigDisplay: boolean;
  layout: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width:992px)'])
      .subscribe((res: BreakpointState) => {
        this.bigDisplay = !res.matches;
        if (this.bigDisplay === true) {
          this.layout = 'list';
        } else {
          this.layout = 'grid';
        }
        console.log(this.layout);
      });
  }

  getInfo(id: number) {
    this.activityService.toggleDialog();
    this.activityService.setEntry(id);
  }
}
