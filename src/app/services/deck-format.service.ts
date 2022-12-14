import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Format } from '../pages/models/format';

@Injectable({
  providedIn: 'root'
})
export class DeckFormatService {

  constructor(private _http: HttpClient) { }

  getAllFormats(): Observable<{ formats: Format[] }> {
    return this._http.get<{ formats: Format[] }>(environment.api.deckmenu + "/deck-formats/all")
  }
}
