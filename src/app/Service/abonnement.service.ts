import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  private baseURL = "http://localhost:9090/gestionAbonnements/abonnement";
  constructor(private httpClient: HttpClient) { }

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
 
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); // permet de supprimer avec l'id dans la requete http : http://localhost:9090/gestionUsers/users/1
  }

  public save(user:any){
    return this.httpClient.post(this.baseURL,user);
  }

  public findByName(nom:string):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+nom);
  }
}
