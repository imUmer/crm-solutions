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

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },  
    { path: 'signup', component: SignupComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 
    { path: 'receipts', component: ReceiptsComponent }, 
    // Routes for authentication (without sidebar)
    { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./modules/admin/admin.module').then((m)=> m.AdminModule)},
    
    // Routes for dashboard and other main pages (with sidebar)
    { path: '', component: MainLayoutComponent, children: [
        { path: 'dashboard', component: DashboardComponent }, 
        // Add more pages inside the dashboard layout if needed
    ]},
    
    // Redirect unknown paths to login
    { path: '**', component: NotfoundComponent }, 
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

