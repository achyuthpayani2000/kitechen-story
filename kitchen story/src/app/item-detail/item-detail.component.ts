import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/cart';
import { Items } from '../models/items';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  itemList: any;
  item: Items = new Items();
  id: any;
  cartList
  constructor(private _router: Router, private _http: HttpClient, private _route: ActivatedRoute, private _authService: AuthService,
    private _cartService: CartService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get<Items>(`http://localhost:3000/items/${this.id}`).subscribe(result => {
      this.item = result;
    }, error => {
      console.log(error);
    })
  }
  deleteItem() {
    this._http.delete(`http://localhost:3000/items/${this.id}`).subscribe(result => {
      alert('Item Deleted Successfully.')
      this._router.navigate(['items']);
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
