import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
    //   { path: '', component: HomeComponent },
      {
        path: 'ezhire',
        loadChildren: 'app/ezhire/ezhire.module#EzhireModule'
      }
    ]
  },

  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);

