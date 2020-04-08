import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enquiry } from './enquiry';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FetchSideNavService {

  // sideNav:any = [{"Name":"Alert","Url":"/alert","child":[]},
  // {"Name":"Dashboard","Url":"/dash","child":[
  //   {"Name":"Energy","url":"/energy"},
  //   {"Name":"Power","url":"/power"}
  // ]}];
  private baseUrl:string = "http://rwtestadminui.azurewebsites.net/api/avik/";
  private systemBaseUrl:string = "http://rwtestadminui.azurewebsites.net/api/v1/";
  

  sideNav = {};

  constructor(private http: HttpClient, private router: Router) { }

  // getSideNav(){
  //   return this.sideNav;
  // }

  loginStatus(Enquiry : enquiry){
    return this.http.post(this.baseUrl + "login" , Enquiry ,{
      withCredentials: true // -===> important
    });
  }

  sessionStatus(){
    return this.http.get(this.baseUrl + "login/check_session",{
      withCredentials: true // -===> important
    });
  }

  logoutStatus(){
    return this.http.get(this.baseUrl + "login/clear_session",{
      withCredentials: true // -===> important
    });
  }

  systemAggregation(){
    return this.http.get(this.systemBaseUrl + "aggregation_job_lable",{ withCredentials: true });
  }

  systemMonitor(){
    return this.http.get(this.systemBaseUrl + "monitor",{ withCredentials: true });
  }
  
  getSideNav(res:any){
    this.getSideNav = res;
  }

  fetchSideNav(){
    return this.getSideNav;
  }

}
