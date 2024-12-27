import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div>
      <h2>Login Page</h2>
      <button routerLink="/dashboard">Go to Dashboard</button>
    </div>
  `,
})
export class LoginComponent {}
