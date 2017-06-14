import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-search-bar',
  templateUrl: './hotel-search-bar.component.html',
  styleUrls: ['./hotel-search-bar.component.css']
})
export class HotelSearchBarComponent implements OnInit {
  @Input() isHotelSearchPageShow: boolean; // <-- added Input annotation
  @Output() onShowHotelSearchPage = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  showHotelSearchPage(){
    this.isHotelSearchPageShow = true;
    this.onShowHotelSearchPage.emit(this.isHotelSearchPageShow);
  }
}
