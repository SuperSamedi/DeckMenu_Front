import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deck } from '../models/deck';

@Component({
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css']
})
export class DeckDetailsComponent implements OnInit {

  private _deck: any;
  get Deck(): Deck { return this._deck; }

  constructor(private _http: HttpClient, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDeckDetails();
  }

  getDeckDetails() {
    this._http.get<Deck>(environment.api.url + `/decks/${this._route.snapshot.params["id"]}`).subscribe(response => {
      console.log(response);
      this._deck = response;
    });
  }

}
