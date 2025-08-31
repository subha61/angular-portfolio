import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui-components/button/button.component';

@Component({
  selector: 'app-what-i-do-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './what-i-do-section.component.html',
  styleUrls: ['./what-i-do-section.component.scss']
})
export class WhatIDoSectionComponent {

}
