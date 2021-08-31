import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private baseURL = "http://localhost:9090/gestionAvis/avis";
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

  public findByNote(note:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+note);
  }

  public findByNote2(note:number):Observable<any>{
    console.log("url : " + this.baseURL+"/"+note)
    return this.httpClient.get(this.baseURL+"/note/"+note);
  }
}
