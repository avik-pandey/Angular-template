import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

import { NgForm } from '@angular/forms';
import {enquiry} from '../../services/enquiry';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchSideNavService } from '../../services/fetch-side-nav.service';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginCred: any;
  
  
  constructor(private _authservice: AuthService, private router: Router, private _loginService :FetchSideNavService) {
  }

  ngOnInit() {
    // $('body').addClass('hold-transition login-page');
    // $(() => {
    //   $('input').iCheck({
    //     checkboxClass: 'icheckbox_square-blue',
    //     radioClass: 'iradio_square-blue',
    //     increaseArea: '20%' /* optional */
    //   });
    // });
   
  }

  ngOnDestroy(): void {
    // $('body').removeClass('hold-transition login-page');
  }

  login(){
    // console.log("ok");
    // localStorage.setItem('key', 'test');
    // this._authservice.login(); 

    
    this.router.navigate(['/members']);  
  }

  submitCredentials(loginForm: NgForm){

    this.loginCred = new enquiry(loginForm.value['Username'], loginForm.value['password']);

    this._loginService.loginStatus(this.loginCred)
          .subscribe(
            data => {
              loginForm.reset();
            },
            error => {
              console.log("error", error)
            }
          )


  }

}
