import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { PacificComponent } from './pacific/pacific.component';
import { MealComponent } from './meal/meal.component';
import { Routes } from '@angular/router';

const routes: Routes = [{
  path: '', redirectTo: 'india-usa', pathMatch: 'full'
}, {
  path: 'india-usa', component: IndiaUsaComponent, children: [
    { path: 'atlantic', component: AtlanticComponent },
    { path: 'pacific', component: PacificComponent }
  ]
}
];

@NgModule({
  declarations: [
    AppComponent,
    IndiaUsaComponent,
    AtlanticComponent,
    PacificComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
