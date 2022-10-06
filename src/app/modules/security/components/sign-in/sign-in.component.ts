import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { SignInService } from '../../services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  username: string = "";
  password: string = "";


  constructor(
    private _auth: SignInService,
    private _session: SessionService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.username, this.password);
    this._auth.signInCall(this.username, this.password).subscribe(response => {
      console.log(response);
      this._session.signIn(response);
      this.onCrossClicked();
      this._router.navigate([''])
    })
  }

  onCrossClicked() {
    console.log("Cross clicked!")
    this._auth.toggleSignInFormVisibility();
  }

}
