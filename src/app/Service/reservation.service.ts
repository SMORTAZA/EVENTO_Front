import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = "http://localhost:9090/gestionReservations/reservation";
  constructor(private httpClient: HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
 
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); 
  }

  public save(user:any){
    console.log("url reservations : " + this.baseURL);
    console.log("service : " + user);
    return this.httpClient.post(this.baseURL,user);
  }

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
}
