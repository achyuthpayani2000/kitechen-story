import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../models/items';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export default class MainComponent implements OnInit {


  itemList: any;
  name: string;

  constructor(private _http: HttpClient, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this._http.get('http://localhost:3000/items').subscribe(result => {
      this.itemList = result;
      console.log(this.itemList);
    }, error => {
      console.log(error);
    })

  }
  checkLoginStatus() {
    if (this._authService.isLoggedIn())
      return true;
    return false;


  }
  logout() {
    this._authService.logout();
    this._router.navigate(["home"]);
  }
  navigate() {
    var name;
    name = (<HTMLInputElement>document.getElementById("search")).value;
    for (let l of this.itemList) {
      if (name === l.name) {
        this._router.navigate(["/item-detail/" + l.id]);
        break;
      }
    }
  }


}
