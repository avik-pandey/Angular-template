import { Component, OnInit } from '@angular/core';
import {FetchSideNavService} from '../../services/fetch-side-nav.service';

@Component({
  selector: 'app-system-health',
  templateUrl: './system-health.component.html',
  styleUrls: ['./system-health.component.css']
})
export class SystemHealthComponent implements OnInit {

  constructor(private __fetch:FetchSideNavService) { }

  ngOnInit(): void {

    this.showBoxData();
    this.showDevices();
  }

  boxData:any;
  boxDevices:any;

  showBoxData(){
    this.__fetch.systemAggregation()
          .subscribe((res) => {
              // console.log(res);
              this.boxData  = res;
          });
          
  }

  showDevices(){
    this.__fetch.systemMonitor()
          .subscribe((res) => {
            // console.log(res);
              this.boxDevices  = res;
          });
  }

}
