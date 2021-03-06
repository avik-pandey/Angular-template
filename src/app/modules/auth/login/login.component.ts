import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { NgForm } from '@angular/forms';
import { enquiry } from '../../services/enquiry';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchSideNavService } from '../../services/fetch-side-nav.service';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCred: any;


  constructor(private _authservice: AuthService, private router: Router, private _loginService: FetchSideNavService) {
  }

  ngOnInit() {
    this.login();
  }

  // ngOnDestroy(): void {
  //   this.login();
  // }

  login() {
    // console.log('ok');
    this._loginService.sessionStatus()
       .subscribe((res:{}) => {
         console.log('above');
        if (!('status' in res)) {
          console.log(res);
          this.router.navigate(['/members']);

        }
       });

    // this.router.navigate(['/members']);
  }

  submitCredentials(loginForm: NgForm) {
    this.loginCred = new enquiry(loginForm.value['Username'], loginForm.value['Password']);
    console.log(this.loginCred);
    this._loginService.loginStatus(this.loginCred)
      .subscribe(
        data => {
          
          loginForm.reset();
          if (Object.keys(data).length !== 0 && data.constructor === Object) {
            this._loginService.getSideNav(data);
            this.router.navigate(['/members']);
          }
        },
        error => {
          console.log("error", error)
        }
      )
  }

}
