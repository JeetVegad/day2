import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BodyComponent } from './body/body.component';
import { FooditemsComponent } from './fooditems/fooditems.component';

const routes: Routes = [{path: '', component:BodyComponent},
  {path:'fooditems/:id',component:FooditemsComponent},
{path:'adminpanel',component:AdminpanelComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
