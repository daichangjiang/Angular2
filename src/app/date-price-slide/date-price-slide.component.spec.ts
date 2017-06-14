/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DatePriceSlideComponent } from './date-price-slide.component';

describe('DatePriceSlideComponent', () => {
  let component: DatePriceSlideComponent;
  let fixture: ComponentFixture<DatePriceSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePriceSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePriceSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
