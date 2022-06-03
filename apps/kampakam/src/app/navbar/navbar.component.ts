import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { MenuItem } from 'primeng/api/menuitem';
import { HttpClient } from '@angular/common/http';
import { EntryInterface } from '../../assets/interfaces/entry.interface';
import { firstValueFrom, map, first } from 'rxjs';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'kampakam-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: MegaMenuItem[];
  private entryId: any;
  model: any;
  bigDisplay: boolean;
  constructor(
    private http: HttpClient,
    public router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width:992px)'])
      .subscribe((res: BreakpointState) => {
        this.bigDisplay = !res.matches;
      });
  }

  async getRandom() {
    const temp: any = await firstValueFrom(this.http.get(`/api/entry/random`));
    this.entryId = temp[0].id;
    this.router.navigate([`/entry/${this.entryId}`]);
  }
  hasRoute(route: string) {
    return this.router.url == route;
  }
}
