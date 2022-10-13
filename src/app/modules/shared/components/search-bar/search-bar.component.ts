import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  enteredSearchValue: string = "";
  // searchBar = document.getElementById('search-bar') as HTMLInputElement;

  // @ViewChild('input') input: ElementRef;

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

  onSearchSubmit() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
