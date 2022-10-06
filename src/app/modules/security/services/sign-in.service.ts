import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private _http: HttpClient) { }

  signInCall(username: string, password: string): Observable<any> {
    return this._http.post(
      environment.api.deckmenu + "/accounts/sign-in", {
        username: username,
        password: password
      }
    );
  }
}
