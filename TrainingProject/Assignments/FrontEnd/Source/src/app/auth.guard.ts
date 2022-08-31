import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role = localStorage.getItem('role');
      if(this.authservice.isLoggedIn()){
        if(role=='admin')
            return true;
            else{
              alert("You don't have access");
             this.router.navigate(['/']);
              return false;
            };
      } 
      this.router.navigate(['/login']);
      return false;
  }
  
}
