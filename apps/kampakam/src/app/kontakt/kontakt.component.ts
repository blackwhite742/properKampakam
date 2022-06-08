import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicesService } from '../contact.service';

const SPOROCILO = {
  name: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],

  sporocilo: ['', [Validators.required]],
};

@Component({
  selector: 'kampakam-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent implements OnInit {
  formData: FormGroup;
  clicked = false;
  constructor(
    private formBuilder: FormBuilder,
    private contact: ServicesService
  ) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group(SPOROCILO);
  }

  onSubmit(formData) {
    this.clicked = true;
    const podatki = formData.value;
    this.contact.PostMessage(podatki).subscribe(
      (response) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
