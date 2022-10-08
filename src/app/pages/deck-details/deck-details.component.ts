import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from 'src/app/modules/security/models/account';
import { AccountRole } from 'src/app/modules/security/models/account-role';
import { SessionService } from 'src/app/modules/security/services/session.service';
import { DeckService } from 'src/app/services/deck.service';
import { Deck } from '../models/deck';

@Component({
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css']
})
export class DeckDetailsComponent implements OnInit {

  $Deck: Observable<Deck>;
  user: Account | null = null;
  chef: string = "";

  addCardListForm = new FormGroup({
    addCardList: new FormControl("")
  })


  constructor(
    private _deckService: DeckService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _session: SessionService
  ) {
    this.$Deck = this._deckService.getDetails(this._route.snapshot.params["id"]);
  }


  ngOnInit(): void {
    this._session.$Account.subscribe(user => {
      this.user = user;
    });
    this.$Deck.subscribe( data => this.chef = data.chef);
  }

  isOwner(): boolean {
    if (this.user) {
      return this.user.username === this.chef || this.user.roles.some((r: AccountRole) => r.role.roleName === "HEADCHEF");
    }
    return false;
  }

  delete(id: number) {
    this._deckService.delete(id).subscribe(() => {
      this._router.navigate(["decks"]);
    });
  }

  onCardListSubmit() {
    console.log(this.addCardListForm.value);
    this._deckService.importCards(this._route.snapshot.params["id"], this.addCardListForm.value).subscribe(response => {
      console.log(response);
      this.$Deck = this._deckService.getDetails(this._route.snapshot.params["id"]);
    });
  }
}
