import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllDecksResponse } from '../pages/models/all-decks-response';
import { Deck } from '../pages/models/deck';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get authHeader(): HttpHeaders {
    return new HttpHeaders().append("Authorization", `Bearer ${this.token}`);
  }


  constructor(private _http: HttpClient, private _route: ActivatedRoute) { }


  create(createDeckForm: any): Observable<any> {
    return this._http.post(environment.api.deckmenu + "/decks/new", createDeckForm, { headers: this.authHeader });
  }

  getAll(username: string): Observable<AllDecksResponse> {
    return this._http.get<AllDecksResponse>(environment.api.deckmenu + "/decks/all/" + username, { headers: this.authHeader });
  }

  getDetails(id: number): Observable<Deck> {
    return this._http.get<Deck>(environment.api.deckmenu + `/decks/` + id, { headers: this.authHeader });
  }

  getShowcaseDecks(username: string): Observable<{decks: Deck[]}> {
    return this._http.get<{decks: Deck[]}>(environment.api.deckmenu + "/decks/all-showcase-decks/" + username);
  }

  // getShowcaseDecks(username: string): Observable<AllDecksResponse> {
  //   return this._http.get<AllDecksResponse>(environment.api.deckmenu + "/decks/all-showcase-decks/" + username)
  // }

  importCards(id: number, list: any): Observable<any> {
    return this._http.put(environment.api.deckmenu + "/decks/update/from-list/" + id, list);
  }

  delete(id: number): Observable<Deck> {
    console.log("attempting to delete.");
    return this._http.delete<Deck>(environment.api.deckmenu + "/decks/" + id, { headers: this.authHeader });
  }

}

