import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Needed for *ngIf and other common directives
import { FormsModule } from '@angular/forms'; // Needed for ngModel, ngForm, etc.
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterModule], // Import necessary modules
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private usernameService: UsernameService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.username && this.password) {
      // Save the username in the service
      this.usernameService.setUsername(this.username);
      // Navigate to the 'display-username' route
      this.router.navigate(['/display-username']);
    }
  }
}
