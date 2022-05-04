import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kampakam-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(data:string){
    console.log(data,"was clicked.");
  }
}
