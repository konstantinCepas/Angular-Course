import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService  implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }
  
  canActivate(): Observable<boolean> { 
    return this.auth.appUser$
    .map (appUser => appUser.isAdmin);
  }
}
