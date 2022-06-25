import { LiteralPrimitive } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from "../class/User";
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

thomas : User = new User("oliver","thomas","oliver-thomas@live.fr","babaorhum")
brice : User = new User("boulay","brice","boulay-brice@live.fr","test")
arrayUsers: Array<User> = []
  constructor() { }
  
  ngOnInit(): void {
   this.arrayUsers.push(this.thomas)
   this.arrayUsers.push(this.brice)
  }

}
