import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServiceDashboardComponent } from './pages/service-dashboard/service-dashboard.component';

const APP_ROUTES: Routes = [
  {
		path: '', component: ServiceDashboardComponent
	},
]

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
