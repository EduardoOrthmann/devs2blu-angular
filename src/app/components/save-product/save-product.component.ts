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
      price: [0, Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
