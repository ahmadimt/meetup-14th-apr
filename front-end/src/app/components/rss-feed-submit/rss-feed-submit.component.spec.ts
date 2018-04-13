import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssFeedSubmitComponent } from './rss-feed-submit.component';

describe('RssFeedSubmitComponent', () => {
  let component: RssFeedSubmitComponent;
  let fixture: ComponentFixture<RssFeedSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssFeedSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFeedSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
