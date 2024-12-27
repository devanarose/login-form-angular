import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router'; // Import provideRouter
import { AppComponent } from './app.component'; // Standalone component
import { LoginComponent } from './login/login.component'; // Standalone component
import { DashboardComponent } from './dashboard/dashboard.component'; // Standalone component
import { HomeComponent } from './home/home.component'; // Standalone component
import { AboutComponent } from './about/about.component'; // Standalone component

// Define application routes
const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route (login page)
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Wildcard route (redirect to login)
];

// Bootstrap the application with standalone components
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Correct way to provide routing for standalone components
  ],
}).catch((err) => console.error(err));
