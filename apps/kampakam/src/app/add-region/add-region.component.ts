import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const FORM_FIELDS={
  id:[''],
  name:['']
}

@Component({
  selector: 'kampakam-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  form:FormGroup;

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

}
