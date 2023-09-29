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

  text = '';
  stringResult: string | null = null;

  initialValue = 0;
  interestRate = 0;
  applicationTime = 0;
  interestResult: number | null = null;

  vowelsAndConsonantsText = '';
  vowelsAndConsonantsResult: string | null = null;

  handleButtonClick() {
    console.log('clicked');
  }

  handleCalculateAverageClick() {
    this.average = (Number(this.firstGrade) + Number(this.secondGrade) + Number(this.thirdGrade)) / 3;
  }

  handleVerifyStringClick() {
    this.stringResult = `O texto possui ${this.text.length} caracteres`;

    if (this.text === 'devs2blu') this.stringResult += ' e é igual a devs2blu';
  }

  handleCalculateInterestClick() {
    this.interestResult = Number(this.initialValue) * Math.pow(1 + Number(this.interestRate) / 100, Number(this.applicationTime));
  }

  handleCountVowelsAndConsonantsClick() {
    let vowels = 0;
    let consonants = 0;

    // for (let i = 0; i < this.vowelsAndConsonantsText.length; i++) {
    //   const letter = this.vowelsAndConsonantsText[i];

    //   if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') vowels++;
    //   else consonants++;
    // }
    // use for...of instead of for and regex instead of if
    for (const letter of this.vowelsAndConsonantsText) {
      if (/[aeiou]/.test(letter)) vowels++;
      else consonants++;
    }

    this.vowelsAndConsonantsResult = `O texto possui ${vowels} vogais e ${consonants} consoantes`;
  }
}
