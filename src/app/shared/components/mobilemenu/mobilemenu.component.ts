import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobilemenu',
  imports: [CommonModule],
  templateUrl: './mobilemenu.component.html',
  styleUrl: './mobilemenu.component.scss'
})
export class MobilemenuComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
