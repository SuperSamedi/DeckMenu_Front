import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deck } from '../pages/models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private _http: HttpClient, private _route: ActivatedRoute) { }


  create(createDeckForm: any): Observable<any> {
    return this._http.post(environment.api.url + "/decks/new", createDeckForm);
  }

  getAll(): Observable<Deck[]> {
    return this._http.get<Deck[]>(environment.api.url + "/decks/all");
  }

  getDetails(id: number): Observable<Deck> {
    return this._http.get<Deck>(environment.api.url + `/decks/` + id);
  }

  delete(id: number) {
    this._http.delete(environment.api.url + "/decks/delete" + id);
  }

}
