import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  responseArr:any;
  authenticated = false;
  isAdmin=false;
  isClient=false;
  isPrestataire=false;
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
      console.log(this.responseArr);
        this.authenticated = true;
        localStorage.setItem("loggedUserId", this.responseArr['idUtilisateur'])
        //Boucle pour donner les rôles
        for(let i=0;i<this.responseArr['roles'].length;i++){
          if (this.responseArr['roles'][i]['idRole']==1){
            this.isAdmin=true
          }
          if (this.responseArr['roles'][i]['idRole']==2){
            this.isClient=true
          }
          if (this.responseArr['roles'][i]['idRole']==3){
            this.isPrestataire=true
          }
      }
      }
      else{
        this.authenticated = false
      }
      return callback && callback();
    });
  }
}
