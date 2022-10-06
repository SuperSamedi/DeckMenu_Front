import { Component } from '@angular/core';
import { SignInService } from './modules/security/services/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeckMenu_Front';

  constructor(private _signInService: SignInService) {

  }

  get isSignInFormVisible(): boolean {
    return this._signInService.isSignInFormVisible;
  }
}
