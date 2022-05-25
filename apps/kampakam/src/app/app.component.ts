import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'reflect-metadata';
import { Router, RouterOutlet } from '@angular/router';
import { slider } from './route-animations';
@Component({
  selector: 'kampakam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent {
  items: any;
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  constructor(private http: HttpClient, public router: Router) {}
}
