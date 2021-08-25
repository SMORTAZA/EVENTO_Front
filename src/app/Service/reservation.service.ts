import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = "http://localhost:9090/gestionEvenements/evenement";
  constructor(private httpClient: HttpClient) { }
  public findAll():Observable<any>{
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
}