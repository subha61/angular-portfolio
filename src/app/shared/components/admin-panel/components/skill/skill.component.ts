import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  skills: string[] = [];
  showModal = false;
  skillForm: FormGroup;

  suggestions: string[] = [
    'Angular', 'React', 'Vue', 'Node.js', 'Java', 'Spring Boot', 'Python', 'Django', 'SQL', 'AWS'
  ];

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      skillInput: ['']
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.skillForm.reset();
  }

  addSkillFromInput(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const value = this.skillForm.get('skillInput')?.value.trim();
      if (value && !this.skills.includes(value)) {
        this.skills.push(value);
      }
      this.skillForm.reset();
    }
  }

  addSkill(skill: string) {
    if (!this.skills.includes(skill)) {
      this.skills.push(skill);
      // this.suggestions = this.suggestions.filter(s => s !== skill);
    }
  }

  removeSkill(skill: string) {
    this.skills = this.skills.filter(s => s !== skill);
  }

  finish() {
    this.closeModal();
  }

}