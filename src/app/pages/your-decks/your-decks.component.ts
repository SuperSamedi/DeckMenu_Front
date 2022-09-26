import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Deck } from '../models/deck';

@Component({
  templateUrl: './your-decks.component.html',
  styleUrls: ['./your-decks.component.css']
})
export class YourDecksComponent implements OnInit {

  private _deckList: Deck[] = [];
  get DeckList(): Deck[] { return [...this._deckList] }

  constructor( private _http: HttpClient ) { }

  ngOnInit(): void {
    this.getAllDecks();
  }

  getAllDecks() {
    this._http.get<Deck[]>(environment.api.url + "/decks/all").subscribe(
      response => {
        console.log(response);
        this._deckList = response;
      }
    )
  }
}
