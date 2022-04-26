import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'kampakam-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MegaMenuItem[];

  constructor() { }

  ngOnInit(): void {
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
