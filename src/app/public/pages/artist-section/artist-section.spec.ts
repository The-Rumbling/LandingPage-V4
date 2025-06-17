import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSection } from './artist-section';

describe('ArtistSection', () => {
  let component: ArtistSection;
  let fixture: ComponentFixture<ArtistSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
