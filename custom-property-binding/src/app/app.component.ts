import { Component } from '@angular/core';
import {Employee} from "./employee.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-property-binding';

  emp: Employee[] = [];

  nameu: string;
  company: string;
  salary: number;

  onButtonClick(){
    this.emp.push(new Employee(this.nameu, this.company,this.salary));
    this.nameu='';
    this.company=''
    this.salary=0;
  }




}
