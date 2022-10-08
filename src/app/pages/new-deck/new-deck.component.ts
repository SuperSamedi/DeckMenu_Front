import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DeckFormatService } from 'src/app/services/deck-format.service';
import { DeckService } from 'src/app/services/deck.service';
import { Format } from '../models/format';

@Component({
  templateUrl: './new-deck.component.html',
  styleUrls: ['./new-deck.component.css']
})
export class NewDeckComponent implements OnInit {

  $Formats: Observable<Format[]>;

  newDeckForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(26)]),
    formatId: new FormControl("")
  })

  constructor(
    private _deckService: DeckService,
    private _formatService: DeckFormatService,
    private _router: Router
  ) {
    this.$Formats = this._formatService.getAllFormats().pipe(
      map((data: { formats: Format[] }) => data.formats)
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.newDeckForm.value);
    this._deckService.create(this.newDeckForm.value).subscribe(returnData => {
      this._router.navigate(['/decks/'+ returnData.id])
    })
  }

}
