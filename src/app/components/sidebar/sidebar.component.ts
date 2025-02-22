import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],  // Import CommonModule
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen = true;
  isMobileSidebarOpen = false;

  navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/receipts', label: 'Receipts', icon: '🧾' },
    { path: '/email', label: 'Email Accounts', icon: '📧' },
    { path: '/settings', label: 'User Settings', icon: '⚙️' }
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleMobileSidebar() {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }
}
