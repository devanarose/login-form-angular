// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  // Import standalone LoginComponent

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginComponent  // Import the standalone LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
