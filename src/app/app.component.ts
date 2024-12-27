import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import RouterModule here
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
