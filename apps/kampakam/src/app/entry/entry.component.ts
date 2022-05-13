import { Component, OnInit, SimpleChanges, Input, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EntryInterface } from '../../assets/interfaces/entry.interface';
import { firstValueFrom,map } from 'rxjs';

@Component({
  selector: 'kampakam-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit,OnChanges {

  @Input() passedId:number;

  id:string|null;
  entryData:EntryInterface;
  givenId:any;
  loaded=false;

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
          this.entryData=await firstValueFrom(this.http.get('/api/entry/id/'+this.id)) as EntryInterface;
          this.loaded=true;
        }
      );
    }
  }

  async ngOnChanges(changes: SimpleChanges){
    if(this.passedId){
      this.loaded=false;
      this.entryData=await firstValueFrom(this.http.get('/api/entry/id/'+this.passedId)) as EntryInterface;
      this.loaded=true;
    }
  }



}
