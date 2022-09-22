import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';
import { Items } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient,
    private _router: Router) { }
  cartList: any;
  addToCart(cart: Cart): Observable<Cart> {
    return this._http.post<Cart>(`http://localhost:3000/cart`, cart);
  }

}