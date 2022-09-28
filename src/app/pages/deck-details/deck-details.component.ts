import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeckService } from 'src/app/services/deck.service';
import { Deck } from '../models/deck';

@Component({
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css']
})
export class DeckDetailsComponent implements OnInit {

  $deckObs: Observable<Deck>;

  constructor(
    private _deckService: DeckService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.$deckObs = _deckService.getDetails(this._route.snapshot.params["id"]);
  }


  ngOnInit(): void {
  }

  delete(id: number) {
    this._deckService.delete(id).subscribe(() => {
      this._router.navigate(["decks"]);
    });
  }
}
