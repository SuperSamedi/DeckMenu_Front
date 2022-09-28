import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeckFormatService } from 'src/app/services/deck-format.service';
import { DeckService } from 'src/app/services/deck.service';
import { Format } from '../models/format';

@Component({
  templateUrl: './new-deck.component.html',
  styleUrls: ['./new-deck.component.css']
})
export class NewDeckComponent implements OnInit {

  private deckFormats$: Observable<Format[]> | null = null;
  private _deckFormats: Format[] | null = null;
  get Formats(): Format[] | null{
    return this._deckFormats;
  }

  newDeckForm = new FormGroup({
    name: new FormControl("Deck Name", [Validators.required, Validators.minLength(1), Validators.maxLength(26)]),
    formatId: new FormControl("")
  })

  constructor(
    private _deckService: DeckService,
    private _formatService: DeckFormatService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.deckFormats$ = this._formatService.getAllFormats();
    this.deckFormats$.subscribe(f => {
      console.log(f);
      this._deckFormats = f
    });
  }

  onSubmit() {
    console.log(this.newDeckForm.value);
    this._deckService.create(this.newDeckForm.value).subscribe(returnData => {
      this._router.navigate(['/decks/'+ returnData.id])
    })
  }



}
