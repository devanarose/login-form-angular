import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="dashboard-container">
      <h2>Dashboard</h2>
      <nav>
        <a routerLink="/home">Home</a> | <a routerLink="/about">About</a>
      </nav>
      <router-outlet></router-outlet> <!-- Where nested routes will be displayed -->
    </div>
  `,
})
export class DashboardComponent {}
