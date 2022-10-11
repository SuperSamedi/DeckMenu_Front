import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _http: HttpClient) { }

  signUpCall(signUpForm: any): Observable<any> {
    return this._http.post(
      environment.api.deckmenu + "accounts/sign-up", {
        username: signUpForm.username,
        password: signUpForm.password,
        email: signUpForm.email
    });
  }
}
