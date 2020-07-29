import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  balance: number = 1000;
  amount: number;
  finalAmount: number;
  display: boolean = false;


  saveBalance(){
    this.finalAmount = parseInt(String(this.balance)) + parseInt(String(this.amount));
    this.balance += 100;
    this.display = true;
  }

  updateBalance(finalBalance){
    this.balance = finalBalance;
  }

}
