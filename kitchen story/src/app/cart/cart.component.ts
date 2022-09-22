import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemAddComponent } from '../item-add/item-add.component';
import { Cart } from '../models/cart';
import { Items } from '../models/items';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  cartList: any;
  item: Items = new Items();
  id: any;
  constructor(private _router: Router, private _userService: UserService,
    private _formBuilder: FormBuilder, private _http: HttpClient,
    private _authService: AuthService) { }

  ngOnInit(): void {
    this.getCartList();

  }

  getCartList() {
    this._http.get('http://localhost:3000/cart').subscribe(result => {
      this.cartList = result;
      console.log(this.cartList);
    }, error => {
      console.log(error);
    })
  }
  remove(id: any) {
    this._http.delete(`http://localhost:3000/cart/${id}`).subscribe(result => {
      alert('Cart Deleted Successfully.')
      this._router.navigate(['cart']);
    }, error => {
      console.log(error);
    })
    this.getCartList();

  }

}
