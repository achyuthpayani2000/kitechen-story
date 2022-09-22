import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _router: Router) { }
  canActivate() {

    if (this.isLoggedIn())
      return true;
    else {
      this._router.navigate(["page"]);
      return false;
    }
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem("isLoggedIn") == 'true') {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
  }
}
