import { Component } from '@angular/core';
import { SessionService } from './modules/security/services/session.service';
import { SignInService } from './modules/security/services/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeckMenu_Front';

  constructor(
    private _signInService: SignInService,
    private _session: SessionService
  ) {
    if (localStorage.getItem("token")) {
        _session.getLoggedAccount(localStorage.getItem("token")!);
    }
  }

  get isSignInFormVisible(): boolean {
    return this._signInService.isSignInFormVisible;
  }
}
