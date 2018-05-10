import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent }  from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { UserInfoComponent }  from './components/user-info/user-info.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'user-info',
    component: UserInfoComponent
  }
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
