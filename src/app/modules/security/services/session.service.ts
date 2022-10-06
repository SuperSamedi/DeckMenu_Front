import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';

import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignInService } from './sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _account: Observable<Account> | null = null;

  get Account() {
    return this._account;
  }


  constructor(
    private _http: HttpClient,
    private _signInService: SignInService,
  ) { }


  signIn(accountData: Observable<Account>) {
    // localStorage.setItem("token", token.value);
    this._account = accountData;
  }

  signOut() {
    localStorage.removeItem("token");
  }

  getLoggedAccount(token: string) {
    const data: any = jwt_decode(token);
    const username: string = data.sub;
    const params = new HttpHeaders().append("Authorization", `Bearer ${token}`);

    console.log("Decoded JWT: " + data);

    this._http.get<Account>(environment.api.deckmenu + "/accounts/" + username, { headers: params })
  }
}
