import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminModule } from './modules/admin/admin.module';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ReceiptsComponent } from './pages/receipts/receipts.component';
import { AnalyticsComponent } from './pages/dashboard/pages/analytics/analytics.component';
import { ConnectionsComponent } from './pages/dashboard/pages/connections/connections.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },  
    { path: 'signup', component: SignupComponent }, 
    { path: 'login', component: LoginComponent }, 
    
    // Routes for authentication (without sidebar)
    { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./modules/admin/admin.module').then((m)=> m.AdminModule)},
    
    // Routes for main pages (with sidebar)
    { path: '', component: MainLayoutComponent, children: [
        // { path: 'dashboard', component: DashboardComponent }, 
        { path: 'receipts', component: ReceiptsComponent }, 
        { path: '**', component: NotfoundComponent }, 

    ]},
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'connect', component: ConnectionsComponent },
          { path: 'analytics', component: AnalyticsComponent },
          
          { path: '', redirectTo: 'connect', pathMatch: 'full' } // Default page inside dashboard
        ]
      },
    
    // Redirect unknown paths to login
    { path: '**', component: NotfoundComponent }, 
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

