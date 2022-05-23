import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kampakam-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  @Input() displayNavbar=true;
  chosenRegion:string|null;

  constructor() { }

  ngOnInit(): void {
  }

  regionClick(data:string){
    if(this.chosenRegion==data){
      this.chosenRegion=null;
    }
    else{
      this.chosenRegion = data;
    }

  }
}
