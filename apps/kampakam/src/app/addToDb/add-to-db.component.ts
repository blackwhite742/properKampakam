import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { MUNICIPALITIES } from '../../assets/municipalities';

const ENTRY_FORM_FIELDS = {
  id: [null],
  name:[''],
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

  regions: any[];
  municipality: any[] = [];
  form: FormGroup;
  checked: boolean;
  checked1: boolean;
  checked3: boolean;
  selectedMunicipality: number;
  municipalities: any;

  munOptions:any;
  selectedCategories: number;
  categories: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  async ngOnInit() {
    this.munOptions=MUNICIPALITIES;
    this.form = this.formBuilder.group(ENTRY_FORM_FIELDS);
    this.municipalities = await firstValueFrom(
      this.http.get(`/api/municipality/getAll`)
    );
    this.categories = await firstValueFrom(
      this.http.get(`/api/category/getAll`)
    );
  }

  submit() {
    const formContent=this.form.getRawValue();
    console.log(formContent);
    formContent.municipalityId=formContent.municipalityId[0];
    const path = `/api/entry/add`;
    return firstValueFrom(this.http.post(path, formContent));
  }

  debug() {
    console.log(this.form.getRawValue());
  }
}
