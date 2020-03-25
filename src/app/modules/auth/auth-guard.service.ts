import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        // console.log("tf");
                        // if (localStorage.getItem('key') == 'test') {
                        //     console.log(localStorage.getItem('key'));
                        //     console.log('pllllzzz');
                        //     this.router.navigate(['/members']);
                        // }
                        // else {
                        //     return true;
                        // }
                        console.log('peace');
                        return true;
                    } else {
                        // console.log('login');
                        this.router.navigate(['/login']);
                    }
                }

            );

    }
}