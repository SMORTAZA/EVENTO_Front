import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicee } from '../models/servicee';

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

  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }

  public findOffresPrestataire(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/user/"+id);
  }

  public save(file:File,offre:Servicee,idPrestataire:string){
    const formData: FormData = new FormData();
    formData.append('tarif',""+offre.tarif);
    formData.append('description', ""+offre.description);
    formData.append('prestataire', ""+idPrestataire);
    formData.append('file', file);
    const req = new HttpRequest('POST',this.baseURL+"img",formData,{reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public updateServicee(service:any):Observable<any>{
    var offreParse = JSON.parse(service);
    console.log(offreParse);
    console.log(this.baseURL+'/'+offreParse.idService);
    return this.httpClient.put(this.baseURL+'/'+offreParse.idService,offreParse);
  }

}
