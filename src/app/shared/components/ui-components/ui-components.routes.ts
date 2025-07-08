import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { UiComponentsComponent } from './ui-components.component'

export const UI_COMPONENTS_ROUTES: Routes = [
  {
    path: '',
    component: UiComponentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full'
      },
      {
        path: 'button',
        component: ButtonComponent
      },
    ]
  }
];