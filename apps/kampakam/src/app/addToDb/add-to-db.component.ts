import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { MUNICIPALITIES } from '../../assets/municipalities';
import { EntryInterface, EntryInterfaceForm } from '../../assets/interfaces/entry.interface';


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
export class AddToDbComponent implements OnInit,OnChanges {

  @Input()editData:EntryInterface;

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

  ngOnChanges(changes: SimpleChanges) {
    if(changes['editData'] && !changes['editData']['firstChange']){

      const temp:any={...this.editData,municipalityId:[this.editData.municipalityId]};

      this.form.patchValue(temp);

    }
  }

  async submit() {
    const formContent=this.form.getRawValue();
    formContent.municipalityId=formContent.municipalityId[0];
    let resp:EntryInterface;
    if(!this.editData){
      const path = `/api/entry/add`;
      resp=await firstValueFrom(this.http.post(path, formContent)) as EntryInterface;
    }
    else{
      const path = `/api/entry/edit`;
      resp=await firstValueFrom(this.http.patch(path, formContent)) as EntryInterface;
    }
    console.log("Response:",resp);
    this.editData=resp;
  }

  debug() {
    console.log(this.form.getRawValue());
  }
}
