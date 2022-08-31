import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeformComponent } from './practiceform/practiceform.component';
import { Practiceform2Component } from './practiceform2/practiceform2.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeformComponent,
    Practiceform2Component,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
