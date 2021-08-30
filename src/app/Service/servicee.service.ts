import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceeService {
  private baseURL = "http://localhost:9090/gestionServices/service";
  constructor(private httpClient: HttpClient) {}

  public findAll():Observable<any>{
    console.log("dans service.ts : " + this.baseURL);
    return this.httpClient.get(this.baseURL);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public save(user:any){
    return this.httpClient.post(this.baseURL,user);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public findOffresPrestataire(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/user/"+id);
  }

}
