import { Component, OnInit, Input, OnChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EntryInterface } from '../../assets/interfaces/entry.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'kampakam-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit,OnChanges {

  @Input() passedId:number;
  @Input() displayNavbar=true;

  id:string|null;
  entryData:any;
  editData:EntryInterface;
  givenId:any;

  images:any;
  imagesLoaded=false;

  //TODO
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];


  //Flags
  loaded=false;
  editMode=false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private location:Location,
    private http:HttpClient
  ) { }

  async ngOnInit(){
    if(!this.passedId){
      this.givenId=this.activatedRoute.paramMap.subscribe(
        async params=>{
          this.loaded=false;
          this.id=params.get('id')
          this.entryData=await firstValueFrom(this.http.get('/api/entry/getWithCat/'+this.id));
          this.loaded=true;
          this.images=await firstValueFrom(this.http.get('/api/image/entry/'+this.id));
          this.imagesLoaded=true;
        }
      );
    }
  }

  async ngOnChanges(){
    if(this.passedId){
      this.imagesLoaded=false;
      this.loaded=false;
      this.entryData=await firstValueFrom(this.http.get('/api/entry/getWithCat/'+this.passedId));
      this.loaded=true;
      this.images=await firstValueFrom(this.http.get('/api/image/entry/'+this.passedId));
      this.imagesLoaded=true;
    }
  }

  edit(){
    this.editData=this.entryData;
    this.editMode=true;
  }

  entryDataChange(data:any){
    this.entryData=data;
  }

}
