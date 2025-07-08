import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui-components/button/button.component';

@Component({
  selector: 'app-professional-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './professional-section.component.html',
  styleUrls: ['./professional-section.component.scss']
})
export class ProfessionalSectionComponent {

}
