import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import routing utilities
import { AppComponent } from './app.component';
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

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure routing
  ],
  bootstrap: [AppComponent], // Bootstrap the root component
})
export class AppModule {}
