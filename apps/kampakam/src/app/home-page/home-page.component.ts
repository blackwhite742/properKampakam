import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'kampakam-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  items: MegaMenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dodaj v DB',
        icon: 'pi pi-fw pi-server',
        routerLink: ['/addToDb'],
      },
      {
        label: 'Random entry',
        icon: 'pi pi-fw pi-download',
        routerLink: ['/entry'],
      },
      {
        label: 'Dogodki',
        icon: 'pi pi-fw pi-calendar',
      },
    ];
  }
}
