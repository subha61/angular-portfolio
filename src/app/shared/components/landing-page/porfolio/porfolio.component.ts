import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui-components/button/button.component';

@Component({
  selector: 'app-porfolio',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent {

}
