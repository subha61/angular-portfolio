import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyClientSectionComponent } from './happy-client-section.component';

describe('HappyClientSectionComponent', () => {
  let component: HappyClientSectionComponent;
  let fixture: ComponentFixture<HappyClientSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HappyClientSectionComponent]
    });
    fixture = TestBed.createComponent(HappyClientSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
