import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { MenuItem } from 'primeng/api/menuitem';
import { HttpClient } from '@angular/common/http';
import { EntryInterface } from '../../assets/interfaces/entry.interface';
import { firstValueFrom,map,first } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'kampakam-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MegaMenuItem[];
  private entryId:any;
  model:any;

  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dodaj v DB',
        icon: 'pi pi-fw pi-server',
        routerLink: ['/addToDb']
      },
      {
        label: 'Random entry',
        icon: 'pi pi-fw pi-download',
        command: ()=>this.getRandom()
      },
      {
        label: 'Dogodki',
        icon: 'pi pi-fw pi-calendar',
      },
    ];
  }

  async getRandom(){
    const temp:any=await firstValueFrom(this.http.get(`/api/entry/random`));
    this.entryId=temp[0].id;
    this.router.navigate([`/entry/${this.entryId}`])
  }

}
