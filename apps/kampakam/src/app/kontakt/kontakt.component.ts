import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

const SPOROCILO = {
  name: ['', [Validators.required]],
  email: ['', [Validators.email, Validators.required]],

  sporocilo: ['', [Validators.required]],
};

@Component({
  selector: 'kampakam-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(SPOROCILO);
    console.log(this.form);
  }

  submit() {
    console.log(this.form.getRawValue());
  }
}
