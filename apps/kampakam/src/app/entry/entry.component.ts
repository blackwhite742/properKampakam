import { Component, OnInit} from '@angular/core';
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
export class EntryComponent implements OnInit {
  id:string|null;
  entryData:EntryInterface;

  givenId=this.activatedRoute.paramMap.subscribe(
    async params=>{
      this.id=params.get('id')
      this.entryData=await firstValueFrom(this.http.get('/api/entry/id/'+this.id)) as EntryInterface;
    }
  );

  constructor(
    private activatedRoute:ActivatedRoute,
    private location:Location,
    private http:HttpClient
  ) { }

  ngOnInit(){

    //TODO Api call to backend -> fetch entry data
    //this.entryData=this.http.get(...)
  }


}
