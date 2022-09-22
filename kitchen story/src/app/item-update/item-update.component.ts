import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../models/items';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {
  id: any;
  item: Items = new Items();
  constructor(private _route: ActivatedRoute, private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get<Items>(`http://localhost:3000/items/${this.id}`).subscribe(result => {
      this.item = result;
    }, error => {
      console.log(error);
    })
  }
  UpdateItem() {
    this._http.put(`http://localhost:3000/items/${this.id}`, this.item).subscribe(result => {
      alert('Item Updated Successfully.');
      console.log(result);
      this._router.navigate(['items']);
    }, error => {
      console.log(error);
    })
  }

}
