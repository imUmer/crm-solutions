import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent },  
    { path: 'signup', component: SignupComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 
];
