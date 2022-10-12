import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  searchText: string = "";


  constructor() { }

  ngOnInit(): void {
  }


  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

}
