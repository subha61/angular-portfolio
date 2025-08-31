import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIDoSectionComponent } from './what-i-do-section.component';

describe('WhatIDoSectionComponent', () => {
  let component: WhatIDoSectionComponent;
  let fixture: ComponentFixture<WhatIDoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WhatIDoSectionComponent]
    });
    fixture = TestBed.createComponent(WhatIDoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
