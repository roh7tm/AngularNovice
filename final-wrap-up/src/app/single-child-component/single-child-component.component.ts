import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-child-component',
  templateUrl: './single-child-component.component.html',
  styleUrls: ['./single-child-component.component.css']
})
export class SingleChildComponentComponent implements OnInit {

  @Input() getUsers: string[];
  displayUserPara = false;
  constructor() { }

  ngOnInit(): void {
  }

  canDisplay(): void{
    this.displayUserPara = true;
    /*console.log('can display is true now');
    console.log('iterating over users array');
*/
    if (this.getUsers.length <= 0){
      console.log('users array is empty');
    }

    /*for (let us of this.getUsers){
        console.log(us);
    }*/
  }

}
