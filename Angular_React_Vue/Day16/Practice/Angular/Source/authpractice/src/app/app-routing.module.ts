import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'dashbord',canActivate:[AuthGuard] ,component:DashbordComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
