import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchText: string = "";
  usernames: string[] = [];


  constructor(
    private _accountService: AccountService
  ) { }

  ngOnInit(): void {
  }


  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
    this._accountService.searchUsernames(searchValue).subscribe({
      next: (response: { usernames: string[] }) => {
        console.log(response);
        this.usernames = response.usernames;
      }
    });
  }

}
