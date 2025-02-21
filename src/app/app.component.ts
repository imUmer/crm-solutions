import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Marking as standalone
  imports: [RouterLink,RouterOutlet, SidebarComponent],  // Importing RouterOutlet for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crmsolutions';
}
