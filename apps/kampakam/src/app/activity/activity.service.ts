import { Injectable } from '@angular/core';
import {BehaviorSubject,Subject} from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  displayDialog=false;
  displayDialogEmit = new BehaviorSubject<boolean>(false);
  entryId = new Subject<number>();

  constructor() { }

  toggleDialog(){
    this.displayDialog=!this.displayDialog;
    this.displayDialogEmit.next(this.displayDialog);
  }

  setEntry(data:number){
    this.entryId.next(data);
  }
}
