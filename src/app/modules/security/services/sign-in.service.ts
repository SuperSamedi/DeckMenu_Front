import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  isSignInFormVisible: boolean = false;
  signInFormVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor(private _http: HttpClient) {
    this.signInFormVisibilityChange.subscribe((value) => {
      this.isSignInFormVisible = value;
    })
  }

  signInCall(username: string, password: string): Observable<any> {
    return this._http.post(
      environment.api.deckmenu + "/accounts/sign-in", {
      username: username,
      password: password
    });
  }

  toggleSignInFormVisibility() {
    this.signInFormVisibilityChange.next(!this.isSignInFormVisible);
  }
}
