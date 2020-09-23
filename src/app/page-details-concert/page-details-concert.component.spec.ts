import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsConcertComponent } from './page-details-concert.component';

describe('PageDetailsConcertComponent', () => {
  let component: PageDetailsConcertComponent;
  let fixture: ComponentFixture<PageDetailsConcertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetailsConcertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailsConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
