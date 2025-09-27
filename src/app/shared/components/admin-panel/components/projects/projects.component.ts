import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Cozy 5 Stars Apartment',
      description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      price: '$899/night',
      location: 'Barcelona, Spain',
      image: 'assets/images/apartment.jpg'
    },
    {
      title: 'Office Studio',
      description: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
      price: '$1,119/night',
      location: 'London, UK',
      image: 'assets/images/office.jpg'
    }
  ];

  onView(project: any) {
    console.log('View project:', project);
  }

  onEdit(project: any) {
    console.log('Edit project:', project);
  }

  onDelete(project: any) {
    console.log('Delete project:', project);
  }

}
