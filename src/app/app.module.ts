import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MasterLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
