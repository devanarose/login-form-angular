// src/app/app.module.server.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule // Ensure ServerModule is imported
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
