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
  filteredData:any;

  bigDisplay: boolean;
  layout: string;
  filterVal:string;

  fromDate:Date;
  toDate:Date;

  //Filter flags
  fromFilterApplied=false;
  toFilterApplied=false;
  categoryFilterApplied=false;

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
      });

    this.data = await firstValueFrom(this.http.get('/api/event/getAll'));
    this.filteredData = this.data;
  }

  fromDateChange(){
    this.fromDate?this.fromFilterApplied=true:this.fromFilterApplied=false;
    this.reapplyFilters();
  }

  toDateChange(){
    this.toDate?this.toFilterApplied=true:this.toFilterApplied=false;
    this.reapplyFilters();
  }

  reapplyFilters(){
    this.filteredData=this.data;
    if(this.fromFilterApplied){
      this.filteredData=this.filteredData.filter((el:any) => Date.parse(el.date) > this.fromDate.getTime());
    }
    if(this.toFilterApplied){
      this.filteredData=this.filteredData.filter((el:any) => Date.parse(el.date) < this.toDate.getTime());
    }
    if(this.categoryFilterApplied){
      //TODO
    }
  }

  resetFilters(){
    this.filteredData=this.data;

    this.filterInput.nativeElement.value="";
    this.dv.filter(this.filterInput.nativeElement.value);
    this.fromDate=null;
    this.toDate=null;
  }

  debug(data:any){
    this.dv.filter(this.filterInput.nativeElement.value);
    //console.log("Dv is ",this.dv);
  }
}
