import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public form!: FormGroup;
  public isReadOnly: boolean = false;
  public submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.maxLength(40)]],
      age: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
      address: ''
    });
  }

  public send(form: FormGroup) {
    this.isReadOnly = true;
    this.submitted = true;
  }

  public backToForm() {
    this.form.reset();
    this.isReadOnly = false;
    this.submitted = false;
  }
}
