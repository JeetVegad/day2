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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
