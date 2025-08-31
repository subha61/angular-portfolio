import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userName = 'Subhabrata Roy';
  @Output() logoutEvent = new EventEmitter<void>();

  logout() {
    this.logoutEvent.emit();
  }

  get initials(): string {
    if (!this.userName) return '';
    const parts = this.userName.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase(); // SR
    }
    return this.userName.substring(0, 2).toUpperCase();
  }

}
