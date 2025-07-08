import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() label: string = 'Click';
  @Input() type: 'primary' | 'outline' = 'primary';

  @Input() iconColor: string = 'text-white'; // Tailwind text color class
  @Input() iconSize: string = 'text-base';   // Tailwind font size class
  @Input() hoverColorOnly: boolean = false;          // Control hover-only effect

  @Input() width: string | number = 180;
  @Input() height: string | number = 48;

  @Input() customClass: string = 'rounded-md px-4 py-2';
  @Input() disabled: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  getWidthClass(): string {
    return typeof this.width === 'number' ? `w-[${this.width}px]` : this.width;
  }

  getHeightClass(): string {
    return typeof this.height === 'number' ? `h-[${this.height}px]` : this.height;
  }

  onClick() {
    if (!this.disabled && !this.isLoading) {
      this.clicked.emit();
    }
  }

}
