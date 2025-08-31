import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContactSectionComponent } from './all-contact-section.component';

describe('AllContactSectionComponent', () => {
  let component: AllContactSectionComponent;
  let fixture: ComponentFixture<AllContactSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllContactSectionComponent]
    });
    fixture = TestBed.createComponent(AllContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
