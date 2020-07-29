import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-bank-component',
  templateUrl: './bank-component.component.html',
  styleUrls: ['./bank-component.component.css']
})
export class BankComponentComponent implements OnInit {

  @Input() totalAmount: number;
  @Output() balanceUpdate = new EventEmitter<number>();




  constructor() { }

  ngOnInit(): void {
  }


  withdraw(): void{
    this.totalAmount -= 100 ;
    this.balanceUpdate.emit(this.totalAmount);

  }


}
