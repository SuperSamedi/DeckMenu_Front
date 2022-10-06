import { Component, OnInit } from '@angular/core';
import { Account } from '../../security/models/account';
import { SessionService } from '../../security/services/session.service';
import { SignInService } from '../../security/services/sign-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // signedUser: any | null = null;

  constructor(
    private _signInService: SignInService,
    private _session: SessionService
  ) { }

  ngOnInit(): void {
    // this._session.$Account.subscribe(user => {
    //   this.signedUser = user
    //   console.log(user);
    // });
  }

  openSignInForm() {
    this._signInService.toggleSignInFormVisibility();
  }

  logout() {
    localStorage.removeItem("token");
  }

  get signedUser(): any {
    return this._session.$Account;
  }
}
