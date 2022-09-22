import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Items } from '../models/items';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  getallusers(): Observable<User[]> {
    return this._http.get<User[]>('http://localhost:3000/user');
  }
  addUser(user: User): Observable<User> {
    return this._http.post<User>(`http://localhost:3000/user`, user);
  }
  getallItems(): Observable<Items[]> {
    return this._http.get<Items[]>(`http://localhost:3000/items`);
  }
  addItem(item: Items): Observable<Items> {
    return this._http.post<Items>(`http://localhost:3000/items`, item);
  }
  
}
