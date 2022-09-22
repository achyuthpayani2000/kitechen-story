import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router, private _userService: UserService) { }
  user: User = new User()
  ngOnInit(): void {
  }
  register() {
    this._userService.addUser(this.user).subscribe(
      result => {
        alert("New User added Successsful");
        this._router.navigate(['login']);
      }, error => {
        console.log(error);
      }
    )


  }
}
