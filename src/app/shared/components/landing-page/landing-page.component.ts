import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProfessionalSectionComponent } from './professional-section/professional-section.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { WhatIDoSectionComponent } from './what-i-do-section/what-i-do-section.component';
import { HappyClientSectionComponent } from './happy-client-section/happy-client-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { AllContactSectionComponent } from './all-contact-section/all-contact-section.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroSectionComponent, 
            ProfessionalSectionComponent, WorkProcessComponent, PorfolioComponent,
            CardSectionComponent, BlogSectionComponent, WhatIDoSectionComponent,
            HappyClientSectionComponent, TestimonialSectionComponent,
            AllContactSectionComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

}
