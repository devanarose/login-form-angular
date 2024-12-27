// src/app/login/login.component.ts
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';  // Import RouterLink for navigation
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Add FormsModule and RouterLink here
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <div>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            [(ngModel)]="username"
            required
            #usernameField="ngModel"
          />
          <div *ngIf="usernameField.invalid && usernameField.touched">
            Username is required.
          </div>
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            [(ngModel)]="password"
            required
            #passwordField="ngModel"
          />
          <div *ngIf="passwordField.invalid && passwordField.touched">
            Password is required.
          </div>
        </div>
        <button type="submit" [disabled]="loginForm.invalid">Login</button>
      </form>

      <!-- Add a button with routerLink for navigation -->
      <button *ngIf="username && password" [routerLink]="['/dashboard']">Go to Dashboard</button>
    </div>
  `,
  styleUrls: ['login.component.css'],
  encapsulation: ViewEncapsulation.None, // Disables encapsulation

})
export class LoginComponent {
  constructor(private router: Router) {}

  username: string = '';
  password: string = '';

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted',
      { username: this.username, password: this.password });
      this.router.navigate(['/dashboard']);

  }
}
