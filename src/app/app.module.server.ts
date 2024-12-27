import { provideServerRendering } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Standalone component
import { LoginComponent } from './login/login.component';  // Standalone LoginComponent

// Define the SSR application
bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(), // Provides server-side rendering support
    // Add any other providers as needed, such as for routes, services, etc.
  ],
}).catch((err) => console.error(err));
