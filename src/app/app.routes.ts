import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./shared/components/landing-page/landing-page.routes').then((m) => m.LANDING_PAGE_ROUTES),
      },
];
