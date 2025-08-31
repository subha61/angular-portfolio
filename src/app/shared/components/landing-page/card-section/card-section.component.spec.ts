import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSectionComponent } from './card-section.component';

describe('CardSectionComponent', () => {
  let component: CardSectionComponent;
  let fixture: ComponentFixture<CardSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardSectionComponent]
    });
    fixture = TestBed.createComponent(CardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
