import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'kampakam-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  data: any;

  bigDisplay: boolean;
  layout: string;
  filterVal:string;

  constructor(
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver
  ) {}

  @ViewChild('dv')dv:any;
  @ViewChild('filterInput')filterInput:any;

  async ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width:992px)'])
      .subscribe((res: BreakpointState) => {
        this.bigDisplay = !res.matches;
        if (this.bigDisplay === true) {
          this.layout = 'grid';
        } else {
          this.layout = 'list';
        }
        console.log(this.layout);
      });

    this.data = await firstValueFrom(this.http.get('/api/event/getAll'));
  }

  debug(data:any){
    //console.log(data);
    this.dv.filter(this.filterInput.nativeElement.value);
    //console.log("Dv is ",this.dv);
  }
}
