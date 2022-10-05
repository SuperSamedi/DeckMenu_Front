import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';
import { Account } from '../models/account';

import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _account: BehaviorSubject<any | null> = new BehaviorSubject(null);

  get $Account(): Observable<Account | null> {
    return this._account.asObservable();
  }


  constructor(private _http: HttpClient) { }


  signIn(token: Token) {
    localStorage.setItem("token", token.value);
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
