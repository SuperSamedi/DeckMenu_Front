import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DeckService } from 'src/app/services/deck.service';
import { AllDecksResponse } from '../models/all-decks-response';
import { Deck } from '../models/deck';

@Component({
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  // private _allDecksResponse$: Observable<AllDecksResponse>;
  $Decks: Observable<Deck[]>;
  // decks: Deck[] = [];
  username: string = "";


  constructor(
    private _deckService: DeckService,
    private _route: ActivatedRoute
  ) {
    this.username = this._route.snapshot.params["username"];
    this.$Decks = this._deckService.getShowcaseDecks(this.username).pipe(
      map((data: {decks: Deck[]}) => data.decks)
    );
    // this.$Decks = this._deckService.getShowcaseDecks(this.username)
    //   .pipe(
    //     map(response => { response.decks })
    //   );
    // this._allDecksResponse$ = this._deckService.getShowcaseDecks(this.username);
    // this._allDecksResponse$.subscribe(response => {
      // this.decks = response.decks;
    // })
  }


  ngOnInit(): void {
    // this.username = this._route.snapshot.params["username"];
    // this._deckService.getShowcaseDecks(this.username).subscribe((data: AllDecksResponse) => {
      // this.listOfDecks = data.decks;
    // });
  }

  // decks(): Observable<Deck[]> {
  //   return this._deckService.getShowcaseDecks(this.username).pipe(
  //     map((data: AllDecksResponse) => data.decks)
  //   );
  // }

}
