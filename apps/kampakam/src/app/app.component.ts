import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@kampakam/api-interfaces';
import "reflect-metadata"
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'kampakam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  regions$ = this.http.get<Message>('/api/region/getAll');

  items:any;
  constructor(private http: HttpClient) {}

  async ngOnInit(){
    this.items=await firstValueFrom(this.regions$)
  }

}
