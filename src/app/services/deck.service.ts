import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionService } from '../modules/security/services/session.service';
import { AllDecksResponse } from '../pages/models/all-decks-response';
import { Deck } from '../pages/models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(
    private _http: HttpClient,
    private _session: SessionService
  ) { }


  create(createDeckForm: any): Observable<any> {
    return this._http.post(environment.api.deckmenu + "/decks/new", createDeckForm, { headers: this._session.authHeader });
  }

  getAll(username: string): Observable<AllDecksResponse> {
    return this._http.get<AllDecksResponse>(environment.api.deckmenu + "/decks/all/" + username, { headers: this._session.authHeader });
  }

  getDetails(id: number): Observable<Deck> {
    return this._http.get<Deck>(environment.api.deckmenu + `/decks/` + id, { headers: this._session.authHeader });
  }

  getShowcaseDecks(username: string): Observable<{ decks: Deck[] }> {
    return this._http.get<{ decks: Deck[] }>(environment.api.deckmenu + "/decks/all-showcase-decks/" + username);
  }

  importCards(id: number, list: any): Observable<any> {
    return this._http.put(environment.api.deckmenu + "/decks/update/from-list/" + id, list, { headers: this._session.authHeader });
  }

  patchIsOnTheMenu(id: number, value: boolean): Observable<Deck> {
    return this._http.patch<Deck>(environment.api.deckmenu + "/decks/is-on-the-menu/" + id, value, { headers: this._session.authHeader });
  }

  patchCoverImage(id: number, newCoverImage: any): Observable<Deck> {
    return this._http.patch<Deck>(environment.api.deckmenu + "/decks/cover/" + id, newCoverImage, { headers: this._session.authHeader });
  }

  patchCardQuantity(id: number, patchForm: any): Observable<Deck> {
    return this._http.patch<Deck>(environment.api.deckmenu + "/decks/card-quantity/" + id, patchForm, { headers: this._session.authHeader });
  }

  delete(id: number): Observable<Deck> {
    console.log("attempting to delete.");
    return this._http.delete<Deck>(environment.api.deckmenu + "/decks/" + id, { headers: this._session.authHeader });
  }

}

