// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Welcome to the App</h1>
    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 20px;
    }
  `],
})
export class AppComponent {}
