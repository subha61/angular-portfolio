import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui-components/button/button.component';

@Component({
  selector: 'app-all-contact-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './all-contact-section.component.html',
  styleUrls: ['./all-contact-section.component.scss']
})
export class AllContactSectionComponent {

}
