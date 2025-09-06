import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Skill {
  name: string;
  version: string;
  experience: string;
  lastUsed: string;
}

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

  skills: Skill[] = [];
  showModal = false;
  showEditModal = false;
  skillForm: FormGroup;
  editSkillForm!: FormGroup;
  dropdownOpen = false;

  suggestions: string[] = [
    'Angular', 'React', 'Vue', 'Node.js', 'Java', 'Spring Boot', 'Python', 'Django', 'SQL', 'AWS', 'Next.js'
  ];
  editIndex: number | null = null;


  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      skillInput: ['']
    });

    this.editSkillForm = this.fb.group({
      name: ['', Validators.required],
      version: [''],
      experience: [''],
      lastUsed: ['',
        [
          Validators.required,
          Validators.pattern(/^(19|20)\d{2}$/) // allows 1900–2099
        ]
      ]
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
      if (value && !this.skills.includes(value) && this.skills.length < 15) {
        this.skills.push(value);
      }
      this.skillForm.reset();
    }
  }

  addSkill(skillName: string) {
    if (
      skillName &&
      !this.skills.some(s => s.name.toLowerCase() === skillName.toLowerCase()) &&
      this.skills.length < 15
    ) {
      // this.skills.push(skill);
      this.skills.push({
        name: skillName,
        version: '',
        experience: '',
        lastUsed: ''
      });
      // this.suggestions = this.suggestions.filter(s => s !== skill);
    }
  }

  removeSkill(skill: string) {
    this.skills = this.skills.filter(s => s.name !== skill);
  }

  finish() {
    this.closeModal();
  }

  /** ---------- EDIT MODAL ---------- */
  openEditModal(index: number) {
    this.editIndex = index;
    this.editSkillForm.patchValue(this.skills[index]);
    this.showEditModal = true;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  setExperience(value: string) {
    this.editSkillForm.patchValue({ experience: value });
    this.dropdownOpen = false;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editSkillForm.reset();
    this.editIndex = null;
  }

  updateSkill() {
    if (this.editSkillForm.valid && this.editIndex !== null) {
      this.skills[this.editIndex] = this.editSkillForm.value;
      this.closeEditModal();
    }
  }

}