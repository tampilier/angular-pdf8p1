import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { SubComponent } from './sub.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent, 
    SubComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
