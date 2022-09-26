import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  templateUrl: './new-deck.component.html',
  styleUrls: ['./new-deck.component.css']
})
export class NewDeckComponent implements OnInit {
  newDeckForm = new FormGroup({
    deckName: new FormControl("Deck Name", [Validators.required, Validators.minLength(1), Validators.maxLength(26)]),
    deckFormat: new FormControl("")
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
