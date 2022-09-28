import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeckService } from 'src/app/services/deck.service';
import { Deck } from '../models/deck';

@Component({
  templateUrl: './your-decks.component.html',
  styleUrls: ['./your-decks.component.css']
})
export class YourDecksComponent implements OnInit {

  $deckList: Observable<Deck[]> | null = null;

  constructor(
    private _deckService: DeckService
  ) {
  }

  ngOnInit(): void {
    this.$deckList = this._deckService.getAll();
  }

  delete(id: number) {
    this._deckService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }

}
