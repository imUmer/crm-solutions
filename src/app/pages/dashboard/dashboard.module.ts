import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module'; // Import routing module
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ConnectionsComponent } from './pages/connections/connections.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule // Load child routes
  ]
})
export class DashboardModule {}
