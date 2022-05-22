import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api/megamenuitem';

import { MUNICIPALITIES } from '../../assets/municipalities2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

@Component({
  selector: 'kampakam-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  items: MegaMenuItem[];
  seasons: any[];

  //Categories
  munOptions: any;
  regOptions: any;
  categoryOptions: any;
  form: FormGroup;

  //Ng Models
  regions: any[];
  priceChecked: boolean;
  accessibilityChecked: boolean;
  accommodationChecked: boolean;
  selectedCategories: any[];
  selectedSeason: string;
  selectedMunicipalities: any[];

  queryResult:any;
  popupDisplay=false;

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
  }

  async submit() {
    this.queryResult=null;

    const formData = this.form.getRawValue();

    const ans=await firstValueFrom(this.http.post(`/api/entry/query`,formData));
    this.queryResult = ans;

    this.popupDisplay=true;
  }

  regionChange(change:any){
    const temp=MUNICIPALITIES.filter(m => m.value===change.value);
    this.munOptions=temp[0].children;
  }
}
