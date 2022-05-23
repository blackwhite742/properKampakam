import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api/megamenuitem';

import { MUNICIPALITIES, MUNICIPALITY_KEYS } from '../../assets/municipalities2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


const GENERATOR_FORM_FIELDS = {
  regions: [''],
  price: [''],
  accessibility: [''],
  accommodation: [''],
  categories: [''],
  season: [''],
  name: [''],
  municipality: [''],
};

interface MunMap{
  [name:string]:number;
}

@Component({
  selector: 'kampakam-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver
  ) {}

  items: MegaMenuItem[];
  seasons: any[];

  //Categories
  munOptions: any;
  regOptions: any;
  categoryOptions: any;
  form: FormGroup;

  //Ng Models
  regions: number|null;
  priceChecked: boolean;
  accessibilityChecked: boolean;
  accommodationChecked: boolean;
  selectedCategories: any[];
  selectedSeason: string;
  selectedMunicipalities: any[];

  queryResult:any;
  popupDisplay=false;

  bigDisplay:boolean;

  municipalityKeys:MunMap=MUNICIPALITY_KEYS;

  async ngOnInit() {
    this.regOptions = MUNICIPALITIES;
    this.seasons = [
      { name: 'Celoletno' },
      { name: 'Poletje' },
      { name: 'Zima' },
    ];

    this.form = this.formBuilder.group(GENERATOR_FORM_FIELDS);

    this.categoryOptions = await firstValueFrom(
      this.http.get(`/api/category/getAll`)
    );

    this.breakpointObserver.observe(["(max-width:992px)"]).subscribe((res:BreakpointState)=>{
      this.bigDisplay=!res.matches;
    })
  }

  async submit() {
    this.queryResult=null;
    let queryData:any;
    const formData = this.form.getRawValue();
    if(!this.bigDisplay){
      queryData=formData;
    }
    else{
      const temp:any={...formData,regions:this.regions};
      queryData=temp;
    }
    const ans=await firstValueFrom(this.http.post(`/api/entry/query`,queryData));
    this.queryResult = ans;

    this.popupDisplay=true;
  }

  regionChange(change:number|string){
    if(!change)return;
    const temp=MUNICIPALITIES.filter(m => m.value===change);
    this.munOptions=temp[0].children;
  }

  mapSelect(data:string|null){
    if(data){
      this.regions=this.municipalityKeys[data];
      this.regionChange(this.regions);
    }
    else
      this.regions=null;
  }

  debug(){
    console.log("Big display:",this.bigDisplay);
  }
}
