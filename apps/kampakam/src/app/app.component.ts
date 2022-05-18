import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'reflect-metadata';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

import { Router, RouterOutlet } from '@angular/router';
import { fader } from './route-animations';
@Component({
  selector: 'kampakam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader],
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
