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
  selectedCategories:any;

  categoryOptions:any;
  filteredSuggestions:any;

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
    this.categoryOptions=await firstValueFrom(this.http.get('/api/eventCategory/getAll'));
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
      const selCatNames=this.selectedCategories.map((el:any)=>el.name);
      this.filteredData=this.filteredData.filter((el:any) =>  el.eventCategories.some(cat=>selCatNames.includes(cat.name)));
    }
  }

  resetFilters(){
    this.filteredData=this.data;

    this.filterInput.nativeElement.value="";
    this.dv.filter(this.filterInput.nativeElement.value);
    this.fromDate=null;
    this.toDate=null;
  }

  search(event:any){
    this.filteredSuggestions=this.categoryOptions.filter((tag:any)=>tag.name.toLowerCase().indexOf(event.query.toLowerCase())==0);
  }

  filterName(data:any){
    this.dv.filter(this.filterInput.nativeElement.value);
  }

  test(event:any){
    if(!this.selectedCategories.length){
      this.categoryFilterApplied=false;
    }
    else{
      this.categoryFilterApplied=true;
    }
    this.reapplyFilters();
  }
}
