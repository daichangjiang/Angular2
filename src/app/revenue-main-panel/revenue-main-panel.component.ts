import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-revenue-main-panel',
  templateUrl: './revenue-main-panel.component.html',
  styleUrls: ['./revenue-main-panel.component.css']
})
export class RevenueMainPanelComponent implements OnInit {
  isHotelSearchPageShow: boolean;
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.isHotelSearchPageShow = false;
  }
  //路由到收入汇总页面
  RouteToSummaryPage() {
    this.router.navigate(['summary']);
  }

  showHotelSearchPage(message: boolean){
    this.isHotelSearchPageShow = message;
  }

  closeHotelSearchPage(message: boolean){
    this.isHotelSearchPageShow = message;
  }
}
