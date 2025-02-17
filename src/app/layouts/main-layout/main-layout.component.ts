import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, SidebarComponent, DashboardComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
