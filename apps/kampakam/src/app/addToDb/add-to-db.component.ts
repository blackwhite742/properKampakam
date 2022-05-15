import { Component, OnInit, Input, OnChanges, SimpleChanges,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, first } from 'rxjs';
import { MUNICIPALITIES } from '../../assets/municipalities';
import { EntryInterface, EntryInterfaceForm } from '../../assets/interfaces/entry.interface';
import {MessageService} from 'primeng/api';

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
  @Output()editDataChange=new EventEmitter();

  // Form models
  regions: any[];
  municipality: any[] = [];
  form: FormGroup;
  checked=false;
  checked1=false;
  checked3=false;
  selectedMunicipality: number;
  municipalities: any;

  // Form options and selections
  munOptions:any;
  selectedCategories: number;
  categories: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService
  ){

  }

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

    const path = `/api/entry/${this.editData?'edit':'add'}`;
    const prompt=this.editData?'posodobljen':'dodan';

    let req;
    if(this.editData){
      req=this.http.patch(path, formContent);
    }
    else{
      req=this.http.post(path, formContent);
    }

    const ans=await req.pipe(first()).subscribe(r=>{

      if(r){
        this.messageService.add({severity:'success', summary:`Zapis ${prompt}`, detail:`Zapis je bil uspešno ${prompt}.`});
        this.editData=formContent as EntryInterface;
        this.editDataChange.emit(this.editData);
        this.form.reset();
      }
      else
        this.messageService.add({severity:'danger', summary:'Napaka', detail:`Prišlo je do napake - ${r}.`}); //TODO maybe dont print r
    })

  }

  debug() {
    console.log(this.form.getRawValue());
  }
}
