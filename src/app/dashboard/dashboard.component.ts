import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule], // Import RouterModule to support routing
  template: `
    <nav>
      <a routerLink="home">Home</a>
      <a routerLink="about">About</a>
      <a routerLink="/">Logout</a>
    </nav>
    <router-outlet></router-outlet> <!-- Placeholder for child routes -->
  `,
  styles: [`
    nav {
      display: flex;
      gap: 1rem;
      background-color: #eee;
      padding: 1rem;
    }
    nav a {
      text-decoration: none;
      color: #007bff;
    }
  `]
})
export class DashboardComponent {}
