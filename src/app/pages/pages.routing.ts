import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const routes: Routes = [
  { 
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graph-one', component: GraphOneComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }

