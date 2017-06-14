import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';
@Component({
  selector: 'app-revenue-summary',
  templateUrl: './revenue-summary.component.html',
  styleUrls: ['./revenue-summary.component.css']
})
export class RevenueSummaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  RouteToMainPage(){
    this.router.navigate(['main']);
  }
}
