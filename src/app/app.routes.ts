import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },  
    { path: 'signup', component: SignupComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 
    { path: '**', component: NotfoundComponent }, 
     // Routes for authentication (without sidebar)
     { path: '', component: MainLayoutComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
    ]},

    // Routes for dashboard and other main pages (with sidebar)
    { path: '', component: MainLayoutComponent, children: [
        { path: 'dashboard', component: DashboardComponent }, 
        // Add more pages inside the dashboard layout if needed
    ]},

    // Redirect unknown paths to login
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

