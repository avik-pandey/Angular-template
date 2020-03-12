import {Component, OnInit} from '@angular/core';
import {FetchSideNavService} from '../../services/fetch-side-nav.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  menu:any = [];

  constructor( private __fetch:FetchSideNavService,private route: Router) {
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });

    this.menu = this.__fetch.getSideNav();
    console.log(this.menu[0]);
  }
s

}
