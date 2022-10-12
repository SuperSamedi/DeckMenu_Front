import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  enteredSearchValue: string = "";

  // Custom Event, emitting a string
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }


  // Raising the custom event
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
