import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "reflect-metadata"
@Component({
  selector: 'kampakam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  items:any;
  constructor(private http: HttpClient) {}

}
