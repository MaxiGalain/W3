import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./cities/cities.routes').then(m => m.CITIES_ROUTES)
  },
];
