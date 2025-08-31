import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui-components/button/button.component';

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent {

}
