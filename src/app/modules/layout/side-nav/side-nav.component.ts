import {Component, OnInit} from '@angular/core';
import {FetchSideNavService} from '../../services/fetch-side-nav.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  sideNav:any;

  constructor( private __fetch:FetchSideNavService,private route: Router) {
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
    // this.showMenu();
    this.showMenu();
    // this.menu = this.__fetch.getSideNav();
    // console.log(this.menu[0]);
  }

  showMenu(){
    // this.__fetch.sessionStatus()
    //       .subscribe((res) => {
    //           console.log(res);
    //       });
    this.sideNav = this.__fetch.fetchSideNav();
    console.log(this.sideNav);
  }

  // fake(){
  //   this.__fetch.loginStatus()
  //        .subscribe((res) => {
  //            console.log(res);
  //        });
  // }


}
