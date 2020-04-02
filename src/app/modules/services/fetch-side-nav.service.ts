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

  private checkSessionUrl:string = "http://rwtestadminui.azurewebsites.net/api/v1/login/check_session";
  private loginUrl:string = "http://rwtestadminui.azurewebsites.net/api/v1/login";

  constructor(private http: HttpClient, private router: Router) { }

  // getSideNav(){
  //   return this.sideNav;
  // }

  loginStatus(Enquiry : enquiry){
    return this.http.post(this.loginUrl , Enquiry);
  }

  sessionStatus(): Observable<any>{
    return this.http.get<any>(this.checkSessionUrl);
  }
}
