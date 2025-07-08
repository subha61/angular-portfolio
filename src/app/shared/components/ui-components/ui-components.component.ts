import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ui-components',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.scss']
})
export class UiComponentsComponent {

  constructor(private router: Router,
    private route: ActivatedRoute) {}

  navigateTo(path: string) {
    this.router.navigate([path], {relativeTo: this.route});
  }

  isActive(path: string): boolean {
    return this.router.url.endsWith(path);
  }

}
