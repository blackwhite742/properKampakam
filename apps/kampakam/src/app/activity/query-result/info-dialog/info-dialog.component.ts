import { Component, OnInit} from '@angular/core';
import { ActivityService } from '../../activity.service';

@Component({
  selector: 'kampakam-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  display:boolean;
  entryId:number;

  constructor(
    private activityService:ActivityService
  ) { }

  ngOnInit(): void {
    this.activityService.displayDialogEmit.subscribe(resp=>{
      this.display=resp;
    })

    this.activityService.entryId.subscribe(resp=>{
      this.entryId=resp;
    })
  }

  closeDialog(){
    this.activityService.toggleDialog();
  }

}
