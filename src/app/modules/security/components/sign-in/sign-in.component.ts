import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SessionService } from '../../services/session.service';
import { SignInService } from '../../services/sign-in.service';

@Component({
  host: { '(document:click)': 'onClick($event)' },
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: any;
  signInFailed: boolean = false;

  constructor(
    private _eref: ElementRef,
    private _auth: SignInService,
    private _session: SessionService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.username, this.password);
    this._auth.signInCall(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        this._session.signIn(response);
        this.onCloseForm();
        this._router.navigate([''])
      },
      (error) => {
        console.error("Error caught in SignInComponent.")
        this.errorMessage = error;
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event.");
          }
          else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401: // login
                this.signInFailed = true;
                console.log("error 401. isSignInFailed = " + this.signInFailed)
                break;
              case 403:
                this._router.navigateByUrl("/unauthorized");
                break;
              case 404:
                this._router.navigateByUrl("/not-found");
                break;
            }
          }
        }
        else {
          console.error("Something else happened.");
        }
      })
  }

  onCloseForm() {
    console.log("Cross clicked!")
    this._auth.toggleSignInFormVisibility();
  }

  onClick(event: { target: any; }) {
    if (!this._eref.nativeElement.contains(event.target) && this._auth.isSignInFormVisible) {
      // this.onCloseForm();
    }
  }
}
