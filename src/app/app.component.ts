import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Allows route content to be displayed
  standalone: true,
  imports: [RouterModule], // Required for routing
})
export class AppComponent {}
