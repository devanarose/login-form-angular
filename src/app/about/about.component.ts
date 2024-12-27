import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>About Us</h2>
    <p>This is the about section of the dashboard.</p>
  `,
  styles: [`
    h2 {
      color: #16a085;
    }
  `]
})
export class AboutComponent {}
