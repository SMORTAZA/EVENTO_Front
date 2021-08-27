import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  responseArr:any;
  authenticated = false;
  role:any;
  constructor(private httpClient:HttpClient) { }
  authenticate(credentials:any, callback:any){
    const headers = new HttpHeaders(
      credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:9090/login/user', {headers: headers}).subscribe(response => {
    this.responseArr = response;
    if(this.responseArr['username']){
        this.authenticated = true;
        console.log(this.responseArr['role']);
      }
      else{
        this.authenticated = false
      }
      return callback && callback();
    });
  }
}
