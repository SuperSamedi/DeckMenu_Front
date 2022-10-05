import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeckService } from 'src/app/services/deck.service';
import { AllDecksResponse } from '../models/all-decks-response';

@Component({
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  $AllDecksResponse: Observable<AllDecksResponse> | null = null;
  private _username: string = "";

  get username() {
    return this._username;
  }

  constructor(
    private _deckService: DeckService,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._username = this._route.snapshot.params["username"];
    this.$AllDecksResponse = this._deckService.getShowcaseDecks(this._username);
  }

}
