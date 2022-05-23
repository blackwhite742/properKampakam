import { trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { state, style } from '@angular/animations';
import { fader } from '../route-animations';
@Component({
  selector: 'kampakam-app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fader],
})
export class HomepageComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
