import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';
import { Account } from '../models/account';

import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignInService } from './sign-in.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _account: BehaviorSubject<any | null> = new BehaviorSubject<Account | null>(null);

  get $Account(): Observable<Account | null> {
    return this._account;
  }


  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }


  signIn(token: Token) {
    localStorage.setItem("token", token.token);
    this.getLoggedAccount(token.token);
  }

  signOut() {
    localStorage.removeItem("token");
    this._account.next(null);
    this._router.navigate(['']);
    console.log("Signed out.");
  }

  getLoggedAccount(token: string) {
    const data: any = jwt_decode(token);
    const username: string = data.sub;
    const params = new HttpHeaders().append("Authorization", `Bearer ${token}`);

    this._http.get<Account>(environment.api.deckmenu + "/accounts/" + username, { headers: params }).subscribe(data => {
      console.log(data);
      this._account.next(data)
    });
  }
}
