import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminLTE';
  constructor(private router:  Router){

  }
  ngOnInit(){
  // localStorage.setItem('key', 'test');
  // if(localStorage.getItem('key') == 'test'){
  //   console.log('meembers');
  //   this.router.navigate(['/members']);
  // }
  }
}
