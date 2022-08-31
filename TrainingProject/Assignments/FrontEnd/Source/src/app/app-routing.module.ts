import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AuthGuard } from './auth.guard';
import { BodyComponent } from './body/body.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path: '', component:BodyComponent},
  {path:'fooditems/:id',component:FooditemsComponent},
{path:'adminpanel',component:AdminpanelComponent,canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'search',component:SearchComponent},
{path:'checkout',component:CheckoutComponent},
{path:'profile',component:ProfileComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
