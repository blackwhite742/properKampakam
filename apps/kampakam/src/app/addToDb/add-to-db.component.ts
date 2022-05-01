import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

const ENTRY_FORM_FIELDS = {
  id: [null],
  location: [''],
  price: [''],
  accessibility: [''],
  season: [''],
  accomodation: [''],
  description: [''],
  image: [''],
  municipalityId: [''],
  categories: [null],
};

@Component({
  selector: 'kampakam-add-to-db',
  templateUrl: './add-to-db.component.html',
  styleUrls: ['./add-to-db.component.scss'],
})
export class AddToDbComponent implements OnInit {
  api: any;

  regions: any[];
  municipality: any[] = [];
  form: FormGroup;
  checked: boolean;
  checked1: boolean;
  checked3: boolean;
  selectedMunicipality: number;
  municipalities: any;

  selectedCategories: number;
  categories: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  async ngOnInit() {
    JSON.stringify(
      (this.api = await firstValueFrom(
        this.http.get(`/api/municipality/getByRegion`)
      ))
    );

    console.log(this.api);
    this.form = this.formBuilder.group(ENTRY_FORM_FIELDS);
    this.municipalities = await firstValueFrom(
      this.http.get(`/api/municipality/getAll`)
    );
    this.categories = await firstValueFrom(
      this.http.get(`/api/category/getAll`)
    );
  }

  submit() {
    console.log(this.form.getRawValue());

    const path = `/api/entry/add`;
    return firstValueFrom(this.http.post(path, this.form.getRawValue()));
    //return firstValueFrom(this.http.post('/api/region/addRegion',this.form.getRawValue()));
  }

  debug() {
    console.log(this.form.getRawValue());
  }
}
