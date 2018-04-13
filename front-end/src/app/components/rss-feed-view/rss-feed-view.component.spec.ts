import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssFeedViewComponent } from './rss-feed-view.component';

describe('RssFeedViewComponent', () => {
  let component: RssFeedViewComponent;
  let fixture: ComponentFixture<RssFeedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssFeedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFeedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
