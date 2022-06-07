import { Component, OnInit, Input, OnChanges, SimpleChanges,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, first } from 'rxjs';
import { MUNICIPALITIES } from '../../assets/municipalities';
import { EntryInterface } from '../../assets/interfaces/entry.interface';
import {MessageService} from 'primeng/api';
import {Validators} from '@angular/forms';


const ENTRY_FORM_FIELDS = {
  id: [null],
  name:['',[Validators.required]],
  location: ['',[Validators.required]],
  price: [''],
  accessibility: [''],
  season: ['',[Validators.required]],
  accomodation: [''],
  description: ['',[Validators.required]],
  municipalityId: ['',[Validators.required]],
  categories: [null,[Validators.required]],
  tags: ['']
};

@Component({
  selector: 'kampakam-add-to-db',
  templateUrl: './add-to-db.component.html',
  styleUrls: ['./add-to-db.component.scss'],
})
export class AddToDbComponent implements OnInit,OnChanges {

  @Input()displayNavbar=true;
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
  tags:string[];

  // Form options and selections
  munOptions:any;
  selectedCategories: any=[];
  categories: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService
  ){

  }

  get images():FormArray{
    return <FormArray>this.form.get('images');
  }

  async ngOnInit() {
    this.munOptions=MUNICIPALITIES;

    this.form = this.formBuilder.group({...ENTRY_FORM_FIELDS,images:this.formBuilder.array([this.createImage()],Validators.required)});

    this.municipalities = await firstValueFrom(
      this.http.get(`/api/municipality/getAll`)
    );
    this.categories = await firstValueFrom(
      this.http.get(`/api/category/getAll`)
    );
  }

  async ngOnChanges(changes: SimpleChanges) {
    if(changes['editData'] && !changes['editData']['firstChange']){
      const temp1=await firstValueFrom(this.http.get(`/api/entryHasCategory/entryCategories/${this.editData.id}`));
      this.selectedCategories=temp1;
      const temp:any={...this.editData,municipalityId:[this.editData.municipality.id],selectedCategories:this.selectedCategories};

      temp.tags=temp.tags.map((el:any)=>el.name)

      this.form.patchValue(temp);

    }
  }

  modelReset(){
    this.checked=false;
    this.checked1=false;
    this.checked3=false;
  }

  async submit() {
    const formContent=this.form.getRawValue();
    formContent.municipalityId=formContent.municipalityId[0];
    const temp:any[]=[];
    formContent.tags?.forEach((el:any) => {
      temp.push({name:el})
    });
    formContent.tags=temp;

    const path = `/api/entry/${this.editData?'edit':'add'}`;
    const prompt=this.editData?'posodobljen':'dodan';

    let req;
    if(this.editData){
      req=this.http.patch(path, formContent);
    }
    else{
      req=this.http.post(path, formContent);
    }

    await req.pipe(first()).subscribe(async (r:any)=>{

      if(r){
        this.messageService.add({severity:'success', summary:`Zapis ${prompt}`, detail:`Zapis je bil uspešno ${prompt}.`});
        if(this.editData){

          const selMun=await firstValueFrom(this.http.get(`/api/municipality/id/${r.municipalityId}`));
          this.editData={...r,municipality:selMun} as EntryInterface;

          this.editDataChange.emit(this.editData);
        }
        this.form.reset();
        this.modelReset();
      }
      else
        this.messageService.add({severity:'danger', summary:'Napaka', detail:`Prišlo je do napake - ${r}.`}); //TODO maybe dont print r
    })

  }


  createImage(){
    return this.formBuilder.group({
      src: ['',Validators.required]
    })
  }

  addImage(){
    this.images.push(this.createImage());
  }


  debug() {
    console.log(this.form.getRawValue());
  }
}
