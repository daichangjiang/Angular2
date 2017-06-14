import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-hotel-search-page',
  templateUrl: './hotel-search-page.component.html',
  styleUrls: ['./hotel-search-page.component.css']
})
export class HotelSearchPageComponent implements OnInit {
  @Input() isHotelSearchPageShow: boolean; // <-- added Input annotation
  @Output() onCloseHotelSearchPage = new EventEmitter<boolean>();
  searchHotelName: string;
  searchHotelNameControl = new FormControl();
  constructor() {
    this.searchHotelName = "";
  }
  ngOnInit() {
    this.searchHotelNameControl.valueChanges
      .debounceTime(1000)
      .subscribe(newValue => this.searchHotelName = newValue);
  }

  closeHotelSearchPage() {
    this.isHotelSearchPageShow = false;
    this.onCloseHotelSearchPage.emit(this.isHotelSearchPageShow);
  }

  clearInput() {
    this.searchHotelName = "";
  }
}
