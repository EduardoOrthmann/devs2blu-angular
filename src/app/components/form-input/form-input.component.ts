import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input()
  placeholder = '';

  @Input()
  type = 'text';

  @Input()
  control = new FormControl();

  @Input()
  id = '';

  @Input()
  label = '';

  errorMessages: Record<string, string> = {
    required: 'Esse campo é obrigatório',
  };
}
