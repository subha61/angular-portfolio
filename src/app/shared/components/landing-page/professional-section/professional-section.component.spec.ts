import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSectionComponent } from './professional-section.component';

describe('ProfessionalSectionComponent', () => {
  let component: ProfessionalSectionComponent;
  let fixture: ComponentFixture<ProfessionalSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProfessionalSectionComponent]
    });
    fixture = TestBed.createComponent(ProfessionalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
