import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutMovieComponent } from './info-about-movie.component';

describe('InfoAboutMovieComponent', () => {
  let component: InfoAboutMovieComponent;
  let fixture: ComponentFixture<InfoAboutMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAboutMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAboutMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
