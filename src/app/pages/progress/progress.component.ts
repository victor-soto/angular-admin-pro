import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  progressOne: number = 25;
  progressTwo: number = 35;

  get getPercentOne(): string {

    return `${this.progressOne}%`; 
  }

  get getPercentTwo(): string {

    return `${this.progressTwo}%`; 
  }

}
