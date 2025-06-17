import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FansSection } from './fans-section';

describe('FansSection', () => {
  let component: FansSection;
  let fixture: ComponentFixture<FansSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FansSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FansSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
