import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  user: User = new User();
  userList: any;
  user1: User = new User();
  id: number;
  name: string;
  password: string;
  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/User').subscribe(result => {
      this.userList = result;
      console.log(this.userList);
    }, error => {
      console.log(error);
    })

  }
  reset() {
    for (let user1 of this.userList) {
      if (this.name === user1.name) {
        this.id = user1.id;
      }
    }
    this.deleteUser();
    this.user.id = this.id;
    this.user.name = this.name;
    this.user.password = this.password;
    this.addUser();

  }
  deleteUser() {
    this._http.delete(`http://localhost:3000/User/${this.id}`).subscribe(result => {
      console.log('User Deleted Successfully.')
    }, error => {
      console.log(error);
    })
  }
  addUser() {
    this._userService.addUser(this.user).subscribe(
      result => {
        alert("update successful");
        this._router.navigate(['login']);
      }, error => {
        console.log(error);
      }
    )
  }

}