import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CityComponent } from './city/city.component';
import { FoodMasterComponent } from './food-master/food-master.component';
import { FooditemadminComponent } from './fooditemadmin/fooditemadmin.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { OffcanvasModule } from '@coreui/angular';
import { IconSetModule } from '@coreui/icons-angular';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooditemsComponent,
    CartComponent,
    SearchPipe,
    AdminpanelComponent,
    CityComponent,
    FoodMasterComponent,
    FooditemadminComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    CheckoutComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    CommonModule,
    OffcanvasModule,
    IconSetModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
