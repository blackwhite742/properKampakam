import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "reflect-metadata"

import {Router} from '@angular/router';
@Component({
  selector: 'kampakam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  items:any;
  constructor(
    private http: HttpClient,
    public router:Router
  ) {}

}
