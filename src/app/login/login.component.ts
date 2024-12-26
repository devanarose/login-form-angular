// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngIf and other directives

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Import CommonModule here
})
export class LoginComponent {
  username: string = ''; 
  password: string = ''; 

  onSubmit() {
    if (this.username && this.password) {
      console.log('Form Submitted!', { username: this.username, password: this.password });
    } else {
      console.log('Form is invalid');
    }
  }
}
