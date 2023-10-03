import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input()
  placeholder = '';

  @Input()
  value: number | string = '';

  @Input()
  type = 'text';

  @Input()
  formControl?: FormControl;
}
