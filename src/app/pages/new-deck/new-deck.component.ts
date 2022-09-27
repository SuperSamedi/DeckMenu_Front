import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeckFormatService } from 'src/app/services/deck-format.service';
import { Format } from '../models/format';

@Component({
  templateUrl: './new-deck.component.html',
  styleUrls: ['./new-deck.component.css']
})
export class NewDeckComponent implements OnInit {

  deckFormats$: Observable<Format[]>;

  newDeckForm = new FormGroup({
    deckName: new FormControl("Deck Name", [Validators.required, Validators.minLength(1), Validators.maxLength(26)]),
    deckFormat: new FormControl("")
  })

  constructor(private _formatService: DeckFormatService, private _router: Router) { }

  ngOnInit(): void {
    this.deckFormats$ = this._formatService.getAllFormats();
  }

  onSubmit() {

  }



}
