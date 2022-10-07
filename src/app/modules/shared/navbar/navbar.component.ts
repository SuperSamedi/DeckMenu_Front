import { Component, ElementRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Account } from '../../security/models/account';
import { SessionService } from '../../security/services/session.service';
import { SignInService } from '../../security/services/sign-in.service';

@Component({
  host: { '(document:click)':'onClick($event)'},
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  signedUser: any | null = null;
  isOptionsVisible: boolean = false;
  optionsVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _eref: ElementRef,
    private _signInService: SignInService,
    private _session: SessionService
  ) {
    this.optionsVisibilityChange.subscribe(value => {
      this.isOptionsVisible = value;
    })
  }

  ngOnInit(): void {
    this._session.$Account.subscribe(user => {
      this.signedUser = user
      console.log("User: " + user);
    });
  }

  openSignInForm() {
    this.toggleOptionsVisibility();
    this._signInService.toggleSignInFormVisibility();
  }

  logout() {
    this.toggleOptionsVisibility();
    this._session.signOut();
    console.log("User(navbar) after log out: " + this.signedUser);
    console.log("User(SessionService) after log out: " + this._session.$Account);
  }

  toggleOptionsVisibility() {
    this.optionsVisibilityChange.next(!this.isOptionsVisible);
  }

  onClick(event: { target: any; }) {
    if (!this._eref.nativeElement.contains(event.target) && this.isOptionsVisible) {
        this.toggleOptionsVisibility();
    }
  }

}
