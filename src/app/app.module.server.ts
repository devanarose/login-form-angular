// src/app/app.module.server.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  // Import the standalone LoginComponent

@NgModule({
  imports: [
    ServerModule,
    LoginComponent  // Import standalone component here, not declare
  ],
  bootstrap: [AppComponent]  // Bootstrap the AppComponent for SSR
})
export class AppServerModule {}
