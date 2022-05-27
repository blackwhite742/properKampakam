import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'kampakam-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  data: any;

  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {
    this.data=await firstValueFrom(this.http.get('/api/event/getAll'))
  }

}
