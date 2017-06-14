import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HotelSearchBarComponent } from './hotel-search-bar/hotel-search-bar.component';
import { RevenueMainPanelComponent } from './revenue-main-panel/revenue-main-panel.component';
import { FixedBottomMenuComponent } from './fixed-bottom-menu/fixed-bottom-menu.component';
import { RevenueSummaryComponent } from './revenue-summary/revenue-summary.component';
import { DatePriceSlideComponent } from './date-price-slide/date-price-slide.component';
import { HotelSearchPageComponent } from './hotel-search-page/hotel-search-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: RevenueMainPanelComponent },
  { path: 'summary', component: RevenueSummaryComponent }
  // { path: 'contactus', redirectTo: 'contact' },
];

@NgModule({
  declarations: [
    AppComponent,
    HotelSearchBarComponent,
    RevenueMainPanelComponent,
    FixedBottomMenuComponent,
    RevenueSummaryComponent,
    DatePriceSlideComponent,
    HotelSearchPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
