import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../models/items';
import { Payment } from '../models/payment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment = new Payment();
  itemList: any;
  cartList: any;
  item: Items = new Items();
  id: any;
  constructor(private _router: Router, private _http: HttpClient, private _route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get<Items>(`http://localhost:3000/items/${this.id}`).subscribe(result => {
      this.item = result;
    }, error => {
      console.log(error);
    })
  }
  pay() {
    this.getCartList();
    this.removeALLCart(this.cartList);
    alert("payment successfull");
    this._router.navigate(["home"]);
  }
  remove(id: any) {
    this._http.delete(`http://localhost:3000/cart/${id}`).subscribe(result => {
      alert('Cart Deleted Successfully.')
      this._router.navigate(['cart']);
    }, error => {
      console.log(error);
    })

  }
  getCartList() {
    this._http.get('http://localhost:3000/cart').subscribe(result => {
      this.cartList = result;

    }, error => {
      console.log(error);
    })
  }
  removeALLCart(cartList: any) {
    for (let o of this.cartList) {
      this.getCartList()
      this.removee(o.id);
      console.log("deleted");
    }
  }
  removee(id: any) {
    this._http.delete(`http://localhost:3000/cart/${id}`).subscribe(result => {
    }, error => {
      console.log(error);
    })

  }

}
