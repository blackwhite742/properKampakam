import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


const REGION_FORM_FIELDS={
  id:[''],
  name:['']
}

const MUNICIPALITY_FORM_FIELDS={
  id:[''],
  name:[''],
  regionId:['']
}

const ENTRY_FORM_FIELDS={
  id:[''],
  location:[''],
  price:[''],
  accessibility:[''],
  season:[''],
  accomodation:[''],
  description:[''],
  image:[''],
  municipality:[''],

}

const CATEGORY_FORM_FIELDS={
  id:[''],
  name:['']
}


@Component({
  selector: 'kampakam-add-to-db',
  templateUrl: './add-to-db.component.html',
  styleUrls: ['./add-to-db.component.scss']
})
export class AddToDbComponent implements OnInit {

  form:FormGroup;

  items:any[]=[
    {name: 'Region'},
    {name: 'Municipality'},
    {name: 'Entry'},
    {name: 'Category'},
  ]

  selectedForm:any;

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient
  )
  {

  }

  ngOnInit(): void {
    this.form=this.formBuilder.group(REGION_FORM_FIELDS);
  }

  submit(){
    console.log(this.form.getRawValue());

    const path=`/api/${this.selectedForm}/add`;
    console.log("Path is",path);
    return firstValueFrom(this.http.post(path,this.form.getRawValue()));
    //return firstValueFrom(this.http.post('/api/region/addRegion',this.form.getRawValue()));
  }

  changeDropdown(){
    if(this.selectedForm=='Region')
      this.form=this.formBuilder.group(REGION_FORM_FIELDS)
    else if(this.selectedForm=='Municipality')
      this.form=this.formBuilder.group(MUNICIPALITY_FORM_FIELDS)
    else if(this.selectedForm=='Entry')
      this.form=this.formBuilder.group(ENTRY_FORM_FIELDS)
    else
      this.form=this.formBuilder.group(CATEGORY_FORM_FIELDS)

  }

  debug(){
    console.log("test");
  }

}
