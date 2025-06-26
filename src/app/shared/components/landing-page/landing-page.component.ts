import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProfessionalSectionComponent } from './professional-section/professional-section.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroSectionComponent, ProfessionalSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

}
