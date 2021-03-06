import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private baseURL = "http://localhost:9090/gestionEvenements/evenement";
  constructor(private httpClient: HttpClient) { }

  public findAll():Observable<any>{
    console.log(this.baseURL);
    return this.httpClient.get(this.baseURL);
  }
 
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id); // permet de supprimer avec l'id dans la requete http : http://localhost:9090/gestionUsers/users/1
  }

  public save(event:any){
    return this.httpClient.post(this.baseURL,event);
  }

  public findByName(nom:string):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+nom);
  }

  public findByCategorie(categorie:String):Observable<any>{
    console.log("url : " + this.baseURL+"/"+categorie)
    return this.httpClient.get(this.baseURL+"/categorie/"+categorie);
  }
  
}
