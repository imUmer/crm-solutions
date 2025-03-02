import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ConnectionsComponent } from './pages/connections/connections.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'connect', component: ConnectionsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: '', redirectTo: 'analytics', pathMatch: 'full' }, // Default page inside dashboard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
