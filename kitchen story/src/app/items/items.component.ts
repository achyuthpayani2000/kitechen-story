import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../models/cart';
import { Items } from '../models/items';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  itemList: any;
  item: Items = new Items();
  id: any;
  constructor(private _router: Router, private _userService: UserService, private _formBuilder: FormBuilder, private _http: HttpClient,
    private _authService: AuthService, private _cartService: CartService) { }

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
  addToCart(cart: Cart) {
    this._cartService.addToCart(cart).subscribe(
      result => {
        alert("New item added Successsful");
        this._router.navigate(['items']);
      }, error => {
        console.log(error);
      }
    )



  }

}
