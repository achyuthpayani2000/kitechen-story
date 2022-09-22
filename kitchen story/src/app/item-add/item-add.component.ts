import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Items } from '../models/items';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  item: Items = new Items();

  constructor(private _userService: UserService, private _router: Router
    , private _http: HttpClient,) { }

  ngOnInit(): void {

  }
  addItem() {
    this._userService.addItem(this.item).subscribe(
      result => {
        alert("New item added Successsful");
        this._router.navigate(['items']);
      }, error => {
        console.log(error);
      }
    )
  }

}
