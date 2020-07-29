import {Component, EventEmitter} from '@angular/core';
import {User} from './User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Binding';
  name: string;
  email: string;
  company: string;
  users: User[] = [];
  canDisplay = false;

  /*assign(event: Event, info: string): void {
    if (info === 'inpName') {
      this.name = (event.target as HTMLInputElement).value;
    } else if (info === 'inpEmail') {
      this.email = (event.target as HTMLInputElement).value;
    } else if (info === 'inpCompany') {
      this.company = (event.target as HTMLInputElement).value;
    }
  }*/

  addUser(): void{
      this.users.push(new User(this.name, this.email, this.company));
      this.name = '';
      this.email = '';
      this.company = '';
      console.log('in addUser() method');
  }

  showUsers(): void{
    this.canDisplay = true;
  }

  getUsers(): User[]{
    console.log('in getUsersdata() method');
    return this.users;
  }


  /*getUpdatedUserData(event: EventEmitter<User[]>): void{
    //this.users = event.value;
  }*/


}


/*names: string[] = [];
name = '';

addUser(): void {
  this.names.push(this.name);
  /!*this.name = '';*!/
  console.log('added user: ' + this.name);
}

allUsers(): string[]{
  return  this.names;
}

getInput(event: Event): void{
 // console.log((event.target as HTMLInputElement).value);
  this.name = (event.target as HTMLInputElement).value;
  (event.target as HTMLInputElement).value = '';
  console.log('name is: ' + this.name);
}*/
