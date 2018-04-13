import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewRssComponent } from './create-new-rss.component';

describe('CreateNewRssComponent', () => {
  let component: CreateNewRssComponent;
  let fixture: ComponentFixture<CreateNewRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewRssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
