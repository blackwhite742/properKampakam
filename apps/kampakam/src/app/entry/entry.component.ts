import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'kampakam-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  id:any;
  entryData:any // TODO create Entry interface

  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private http:HttpClient
  ) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get("id");

    //TODO Api call to backend -> fetch entry data
    //this.entryData=this.http.get(...)
  }

}
