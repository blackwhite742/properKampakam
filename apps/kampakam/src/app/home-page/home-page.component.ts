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
  selector: 'kampakam-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
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
    const formData = this.form.getRawValue();
    console.log('Form data:', formData);
    const ans=await firstValueFrom(this.http.post(`/api/entry/query`,formData));
    console.log("Api answer:",ans);
  }

  regionChange(change:any){
    const temp=MUNICIPALITIES.filter(m => m.value===change.value);
    this.munOptions=temp[0].children;
  }
}
