import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionService } from '../modules/security/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private _http: HttpClient,
    private _session: SessionService
  ) { }


  searchUsernames(searchText: string): Observable<{usernames: string[]}> {
    let params = new HttpParams().set('text', searchText);
    return this._http.get<{ usernames: string[] }>(environment.api.deckmenu + "/accounts/search", {params: params});
  }

}
