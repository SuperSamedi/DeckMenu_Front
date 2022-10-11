import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeckService } from 'src/app/services/deck.service';
import { AllDecksResponse } from '../models/all-decks-response';
import { Deck } from '../models/deck';

@Component({
  templateUrl: './your-decks.component.html',
  styleUrls: ['./your-decks.component.css']
})
export class YourDecksComponent implements OnInit {

  // $AllDecksResponse: Observable<AllDecksResponse> | null = null;
  listOfDecks: Deck[] = []

  private _username: string = "";

  constructor(
    private _deckService: DeckService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._username = this._route.snapshot.params["username"];
    this._deckService.getAll(this._username).subscribe((data: AllDecksResponse) => {
      this.listOfDecks = data.decks;
    });
  }

  delete(id: number) {
    this._deckService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }

}
