import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component'; // Ensure this is a standalone component
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component'; // Standalone component
import { DashboardComponent } from './app/dashboard/dashboard.component'; // Standalone component

const routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'dashboard', component: DashboardComponent },
];

// Bootstrap the application for SSR
bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    provideRouter(routes), // Provide routes for SSR
  ],
}).catch((err) => console.error(err));


