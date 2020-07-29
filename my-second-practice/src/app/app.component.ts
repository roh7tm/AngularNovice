import { Component } from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [ ` .cont{
        color: white;
  } `]
})
export class AppComponent {
  title = 'Assignment 3';
  showPara = 'Wow. Secret Agent. You are welcome!!';
  buttonClick = false;
  buttonClicks = [];
  private op: string;
  // i = 0;

  constructor() {
    this.buttonClicks = [];
  }

  onButtonClick(): void{
    this.op = new Date().toString();
    if (this.buttonClick === false){
      this.buttonClick = true;
      this.buttonClicks.push('Show: ' + this.op);
    }
    else if ( this.buttonClick === true){
      this.buttonClick = false;
      this.buttonClicks.push('Hide: ' + this.op);
    }

    // this.i = this.i + 1;
    console.log(this.op);

  }


}
