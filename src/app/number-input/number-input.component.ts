import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {

  @Input()
  placeholder = '';

  @Input()
  value = 0;
}
