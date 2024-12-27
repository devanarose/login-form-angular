import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component'; // Ensure correct file path
import { LoginComponent } from './app/login/login.component'; // Ensure correct file path
import { DashboardComponent } from './app/dashboard/dashboard.component'; // Ensure correct file path

// Define application routes
const routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'dashboard', component: DashboardComponent }, // Dashboard route
];

// Bootstrap the application
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide routes
  ],
}).catch((err) => console.error(err));
