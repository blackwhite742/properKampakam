import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'kampakam-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  @Input() displayNavbar = true;
  @Output() regionChange = new EventEmitter<string | null>();

  chosenRegion: string | null;

  constructor() {}

  ngOnInit(): void {}

  regionClick(data: string) {
    if (this.chosenRegion == data) {
      this.chosenRegion = null;
    } else {
      this.chosenRegion = data;
    }
    this.regionChange.emit(this.chosenRegion);
  }
}
