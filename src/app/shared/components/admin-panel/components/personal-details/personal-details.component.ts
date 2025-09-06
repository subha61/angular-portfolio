import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  profileImage: string | ArrayBuffer | null = null;


  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const validTypes = ['image/png', 'image/jpeg'];
  
      if (!validTypes.includes(file.type)) {
        alert('Only PNG and JPG files are allowed.');
        this.fileInput.nativeElement.value = ''; // reset input
        return;
      }
  
      const reader = new FileReader();
      reader.onload = e => this.profileImage = reader.result;
      reader.readAsDataURL(file);
    }
  }
  

}
