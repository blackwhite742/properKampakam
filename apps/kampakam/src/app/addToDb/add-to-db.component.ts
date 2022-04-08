import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


const FORM_FIELDS={
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
    this.form=this.formBuilder.group(FORM_FIELDS);
  }

  submit(){
    console.log(this.form.getRawValue());
    return firstValueFrom(this.http.post('/api/region/addRegion',this.form.getRawValue()));
  }

  debug(){
    console.log(this.selectedForm);
  }

}
