import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from '../User.model';

@Component({
  selector: 'app-two-way-comp-binding',
  templateUrl: './two-way-comp-binding.component.html',
  styleUrls: ['./two-way-comp-binding.component.css']
})
export class TwoWayCompBindingComponent implements OnInit {

  @Input() usersList: User[] ;

  editInfo: boolean = this.usersList != null;
  particularUser: User;
  letUserEdit: boolean = false;
  //@Output() finalUsers =  new EventEmitter<User[]>();


  constructor() {
    console.log('userlist is: ' + this.usersList);
  }

  ngOnInit(): void {
  }

  display(): void{
    this.usersList != null ? this.editInfo = true :  this.editInfo = false;
  }

  findUserUsingEmail(email: string): User{
    console.log('email is: ' + email);
    this.usersList.forEach(user => {
      if (user.email === email){
        this.particularUser = user;
        this.letUserEdit = true;
        return user;
      }
    }
    );
    return null;
  }



}
