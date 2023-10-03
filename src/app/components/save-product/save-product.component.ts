import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.scss']
})
export class SaveProductComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  // create a submit method
  submit() {
    console.log(this.form.value);
  }
}
