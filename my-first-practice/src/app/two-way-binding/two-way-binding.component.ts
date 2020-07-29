import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  username = '';
  usernameEmpty = false;

  constructor() {

  }

  ngOnInit(): void {
  }


  onInputChange(event: Event): void {

    this.username = (event.target as HTMLInputElement).value;
  }

  onButtonClick() : boolean{
    if (this.username !== ''){
      this.usernameEmpty = true;
      this.username = '';
      return this.usernameEmpty;
    }


  }


}
