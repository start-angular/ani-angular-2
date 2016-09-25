import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';

export const routes: Routes = [
	...LoginRoutes,
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];
