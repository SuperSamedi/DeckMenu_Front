import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  addCardListForm = new FormGroup({
    addCardList: new FormControl("")
  })

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

  onCardListSubmit() {
    console.log(this.addCardListForm.value);
    // this._deckService.importCards(this._route.snapshot.params["id"], this.addCardListForm.value);
  }
}
