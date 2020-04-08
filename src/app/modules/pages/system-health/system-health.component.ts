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
    this.showDeviceContent();
    this.showCustomer();
    this.cntSMS();
  }

  boxData:any;
  boxDevices:any;

  devicesContent:any;
  dropDownCustomer:any;
  cntSms:any;

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

  showDeviceContent(){
    this.__fetch.systemDevices()
          .subscribe((res) => {
            console.log(res);
             this.devicesContent = res[0].devices;
          });
  }

  showCustomer(){

    this.__fetch.systemCustomer()
          .subscribe((res) => {
             console.log(res);
             this.dropDownCustomer = res;
          });

  }

  cntSMS(){

    this.__fetch.systemCntSMS()
          .subscribe((res) => {
             console.log(res);
             this.cntSms = res;
          });
       
  }

}
