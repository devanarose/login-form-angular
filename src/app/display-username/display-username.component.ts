import { Component } from '@angular/core';
import { UsernameService } from '../username.service'; // Import the service

@Component({
  selector: 'app-display-username',
  templateUrl: './display-username.component.html',
  styleUrls: ['./display-username.component.css'],
})
export class DisplayUsernameComponent {
  username: string = '';

  constructor(private usernameService: UsernameService) {
    this.username = this.usernameService.getUsername(); // Get the username from the service
  }
}
