import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
    //   {
    //     path: '',
    //     redirectTo: 'button',
    //     pathMatch: 'full'
    //   },
    ]
  }
];