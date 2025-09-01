import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './admin-panel.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SkillComponent } from './components/skill/skill.component';

export const ADMIN_PANEL_ROUTES: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: '',
        redirectTo: 'personal-details',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: HomeComponent
      },
      {
        path: 'personal-details',
        component: PersonalDetailsComponent
      },
      {
        path: 'skills',
        component: SkillComponent
      },
    ]
  }
];