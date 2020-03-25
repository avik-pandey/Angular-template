import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  
  constructor(private _authservice: AuthService, private router: Router) {
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
    localStorage.setItem('key', 'test');
    this._authservice.login(); 
    this.router.navigate(['/members']);  
  }

}
