import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Eduardo';
  firstGrade = 0;
  secondGrade = 0;
  thirdGrade = 0;
  average: number | null = null;

  handleButtonClick() {
    console.log('clicked');
  }

  handleCalculateAverageClick() {
    this.average = (Number(this.firstGrade) + Number(this.secondGrade) + Number(this.thirdGrade)) / 3;
  }
}
