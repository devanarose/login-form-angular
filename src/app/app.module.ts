// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import the standalone LoginComponent

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    LoginComponent, // Import LoginComponent directly
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
