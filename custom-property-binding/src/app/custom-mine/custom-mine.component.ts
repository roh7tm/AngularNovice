import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Employee} from "../employee.model";

@Component({
  selector: 'app-custom-mine',
  templateUrl: './custom-mine.component.html',
  styleUrls: ['./custom-mine.component.css']
})
export class CustomMineComponent implements OnInit {

  @Input()  employees : Employee[];
  constructor() { }

  ngOnInit(): void {
  }

  clearData(){
    this.employees.length = 0;
  }

}
