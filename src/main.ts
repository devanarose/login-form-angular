import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { DisplayUsernameComponent } from './app/display-username/display-username.component'; // Import DisplayUsernameComponent

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent }, // Default route
      { path: 'display-username', component: DisplayUsernameComponent }, // Add this route
    ]),
  ],
}).catch((err) => console.error(err));
