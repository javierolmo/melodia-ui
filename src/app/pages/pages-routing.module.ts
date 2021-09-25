import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from '../@core/utils/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: 'composicion',
      loadChildren: () => import('./composicion/composicion.module')
        .then(m => m.ComposicionModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'repositorio',
      loadChildren: () => import('./repositorio/repositorio.module')
        .then(m => m.RepositorioModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module')
          .then(m => m.ProfileModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module')
          .then(m => m.AdminModule),
      canActivate: [AuthGuard],
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
