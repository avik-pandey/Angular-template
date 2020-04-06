import {Component, OnInit} from '@angular/core';
import {FetchSideNavService} from '../../services/fetch-side-nav.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _fetch :FetchSideNavService , private router :Router) {
  }

  ngOnInit() {
  }

  logout(){

    this._fetch.logoutStatus(); 
    this.router.navigate(['/login']);
  }

}
