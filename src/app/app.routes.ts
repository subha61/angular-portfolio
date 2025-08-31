import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./shared/components/landing-page/landing-page.routes').then((m) => m.LANDING_PAGE_ROUTES),
    },
    {
        path: 'ui-components',
        loadChildren: () =>
          import('./shared/components/ui-components/ui-components.routes').then((m) => m.UI_COMPONENTS_ROUTES),
    },
    {
        path: 'login',
        loadChildren: () =>
          import('./core/auth/components/authentication/authentication.routes').then((m) => m.AUTHENTICATION_ROUTES),
    },
];
