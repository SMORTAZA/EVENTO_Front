import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Evenement } from 'src/app/models/evenement';
import { AdresseService } from 'src/app/Service/adresse.service';
import { CatalogueService } from 'src/app/Service/catalogue.service';
import { EvenementService } from 'src/app/Service/evenement.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  align:String="center";  
  constructor(private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    if(!this.log()){
      this.router.navigate(['/component/login']);}
      if (!this.isClient()){
        this.router.navigate(['/component/home']);}
  }

  log(){
    if(this.appService.isAdmin==false && this.appService.isClient==true && this.appService.isPrestataire ==false ){
      return true;
    }else{
      return false;
    }
  }
  isClient() {
    return this.appService.isClient;
  }
  isAdmin() {
    return this.appService.isAdmin;
  }
}
