import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import {
  MUNICIPALITIES,
  MUNICIPALITY_KEYS,
} from '../../assets/municipalities2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MainService } from '../../shared/services/main.service';
import { DbTagCount } from '../../../../../libs/interfaces/tag.interface';

const GENERATOR_FORM_FIELDS = {
  regions: [''],
  price: [''],
  accessibility: [''],
  accommodation: [''],
  categories: [''],
  season: [''],
  name: [''],
  municipality: [''],
  tags: [''],
};

interface MunMap {
  [name: string]: number;
}

@Component({
  selector: 'kampakam-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver,
    private mainService: MainService
  ) {}

  items: MegaMenuItem[];
  seasons: any[];

  //Component options
  priceOptions: any[];
  accessibilityOptions: any[];
  accommodationOptions: any[];

  //Categories
  munOptions: any;
  regOptions: any;
  categoryOptions: any;
  form: FormGroup;

  //Ng Models
  regions: number | null;
  priceChecked: boolean | null = null;
  accessibilityChecked: boolean | null = null;
  accommodationChecked: boolean | null = null;
  selectedCategories: any[];
  selectedSeason: string;
  selectedMunicipalities: any[];

  tags: any = [];
  filteredSuggestions: DbTagCount[];
  tagSuggestions: any;

  //Dialog
  queryResult: any;
  popupDisplay = false;

  bigDisplay: boolean;

  municipalityKeys: MunMap = MUNICIPALITY_KEYS;

  math = Math;

  //Guard
  loaded: boolean;

  async ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width:992px)'])
      .subscribe((res: BreakpointState) => {
        this.bigDisplay = !res.matches;
      });
    this.regOptions = [{ label: 'Vse regije', value: null }, ...MUNICIPALITIES];

    this.seasons = [
      { name: 'Celoletno' },
      { name: 'Poletje' },
      { name: 'Zima' },
    ];

    this.priceOptions = [
      { name: 'Vseeno', value: null },
      { name: 'Zastonj', value: false },
      { name: 'Plačljivo', value: true },
    ];

    this.accessibilityOptions = [
      { name: 'Vseeno', value: null },
      { name: 'Gibalno omejeni', value: true },
    ];

    this.accommodationOptions = [
      { name: 'Vseeno', value: null },
      { name: 'Da', value: true },
    ];

    this.form = this.formBuilder.group(GENERATOR_FORM_FIELDS);

    this.categoryOptions = await firstValueFrom(
      this.http.get(`/api/category/getAll`)
    );

    this.tagSuggestions = await firstValueFrom(
      this.http.get(`/api/tag/getAllCount`)
    );
    this.loaded = true;
  }

  async submit() {
    this.queryResult = null;
    let queryData: any;
    const formData = this.form.getRawValue();
    if (!this.bigDisplay) {
      queryData = formData;
    } else {
      const temp: any = { ...formData, regions: this.regions };
      queryData = temp;
    }
    const ans = await firstValueFrom(
      this.http.post(`/api/entry/query`, queryData)
    );
    console.log(ans);
    this.queryResult = ans;
  }

  regionChange(change: number | string) {
    if (!change) return;
    this.selectedMunicipalities = [];
    const temp = MUNICIPALITIES.filter((m) => m.value === change);
    this.munOptions = temp[0].children;
  }

  mapSelect(data: string | null) {
    if (data) {
      this.regions = this.municipalityKeys[data];
      this.regionChange(this.regions);
    } else {
      this.regions = null;
      this.munOptions = [];
    }
  }

  search(event: any) {
    this.filteredSuggestions = this.tagSuggestions.filter(
      (tag: any) =>
        tag.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0
    );
  }

  tagQuickSelect(tag: any) {
    if (!this.tags.find((el: any) => el.name == tag.name))
      this.tags = [...this.tags, { name: tag.name }];
    else {
      this.tags = [...this.tags];
    }
  }

  isTagSelected(tagName: any) {
    if (this.tags.find((el: any) => el.name == tagName)) return true;
    return false;
  }

  debug() {}
}
