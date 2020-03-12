import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchSideNavService {

  sideNav:any = [{"Name":"Alert","Url":"/alert","child":[]},
  {"Name":"Dashboard","Url":"/dash","child":[
    {"Name":"Energy","url":"/energy"},
    {"Name":"Power","url":"/power"}
  ]}];

  constructor() { }

  getSideNav(){
    return this.sideNav;
  }
}
