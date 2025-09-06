import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SideBarList } from '../../constant';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgbNavModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  siteBarList = SideBarList;
  activePage = SideBarList[0].routeURL;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setActiveFromUrl(this.router.url);
  }

  private setActiveFromUrl(url: string): void {
    const urlPart = url.split('/').pop();
    this.activePage = urlPart || '';
  }

  navigate(page: string) {
    this.activePage = page;
    this.router.navigate([`admin/${page}`]);
  }
}
