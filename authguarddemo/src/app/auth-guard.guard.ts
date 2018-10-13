import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';

import { Observable, Subject, pipe } from 'rxjs';


@Injectable()
export class AuthGuardGuard implements CanActivate 
{
  constructor(private router:Router)
  {

  }
  canActivate(  next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
     {
       alert("Unauthorized Access,Redirecting to Home");
       this.router.navigate(['Home']);
        return false;
     }
}
