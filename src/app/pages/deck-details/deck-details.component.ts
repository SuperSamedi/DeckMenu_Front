import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
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

  user: Account | null = null;
  deck: Deck | null = null;

  // Card Import
  isCardImportVisible: boolean = false;
  cardImportVisibilityChange: Subject<boolean> = new Subject<boolean>();
  cardsNotFound: string[] = [];
  addCardListForm = new FormGroup({
    addCardList: new FormControl("")
  })


  constructor(
    private _deckService: DeckService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _session: SessionService
  ) {
    this.cardImportVisibilityChange.subscribe(value => {
      this.isCardImportVisible = value;
    })
  }


  ngOnInit(): void {
    this._session.$Account.subscribe(user => {
      this.user = user;
    });
    this._deckService.getDetails(this.deckId()).subscribe({
      next: (data: Deck) => {
        this.deck = data;
      },
      error: (e) => {
        console.error("Error caught in DeckDetailsComponent.")
        if (e instanceof HttpErrorResponse) {
          console.log(`error status : ${e.status} ${e.statusText}`);
          switch (e.status) {
            case 403:
              this._router.navigateByUrl("/error/unauthorized");
              break;
            case 404:
              this._router.navigateByUrl("/error/not-found");
              break;
          }
        }
        else {
          console.error("Something else happened.");
        }
      }
    });
  }

  isOwner(): boolean {
    if (this.user != null && this.deck != null) {
      return this.user.username === this.deck.chef || this.user.roles.some((r: AccountRole) => r.role.roleName === "HEADCHEF");
    }
    return false;
  }

  get deckCover(): string {
    if (this.deck && this.deck.coverImage) {
      return this.deck.coverImage;
    }
    return "/assets/img/default-deck-cover-plains.jpg";
  }

  get checkMarkImagePath(): string {
    if (this.deck) {
      if (this.deck.onTheMenu) {
        return "/assets/img/check-mark-32.png";
      }
    }
    return "/assets/img/cross-32.png";
  }

  get checkMarkAltMessage(): string {
    if (this.deck) {
      if (this.deck.onTheMenu) {
        return "checked";
      }
    }
    return "unchecked";
  }

  onCardListSubmit() {
    console.log(this.addCardListForm.value);
    this.cardsNotFound = [];
    this._deckService.importCards(this.deckId(), this.addCardListForm.value).subscribe({
      next: response => {
        console.log(response);
        this.deck = response.deck;
        this.cardsNotFound = response.cardsNotFound;
      }
    });
  }

  onButtonCheckClicked() {
    console.log("check was clicked!");
    if (this.deck) {
      this.deck.onTheMenu = !this.deck.onTheMenu;
      this._deckService.patchIsOnTheMenu(this.deckId(), this.deck.onTheMenu).subscribe({
        next: (updatedDeck: Deck) => {
          this.deck = updatedDeck;
        }
      })
    }
  }

  toggleCardImportVisibility() {
    this.cardImportVisibilityChange.next(!this.isCardImportVisible);
  }

  onCrossClicked() {
    this.toggleCardImportVisibility();
  }

  onChangeCoverClicked(newCover: string) {
    this._deckService.patchCoverImage(this.deckId(), { newDeckImage: newCover }).subscribe({
      next: (response: Deck) => {
        this.deck = response;
      }
    });
  }

  delete(id: number) {
    this._deckService.delete(id).subscribe(() => {
      this._router.navigate(["decks"]);
    });
  }

  deckId(): number {
    return this._route.snapshot.params["id"];
  }
}
