import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 cuserId?:string;
  constructor(private appService:AppService,private router:Router, private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem("loggedUserId");
    this.cuserId=userId!== null ? JSON.parse(userId) : new Utilisateur();

    if(!this.authenticated()){
      console.log("!log");
    this.router.navigate(['/component/login']);}
    else{
      console.log("log");

 if(this.isAdmin()&&!this.isClient()&&!this.isPrestataire()){
  console.log("admin");
    this.router.navigate(['/component/admin']);}
    else if(!this.isAdmin()&&this.isClient()&&!this.isPrestataire()){
      console.log("1client");
      this.router.navigate(['/component/client']);}
      else if(!this.isAdmin()&&!this.isClient()&&this.isPrestataire()){
        console.log("presta");
        this.router.navigate(['/component/prestataire']);}
        else if(!this.isAdmin()&&this.isClient()&&this.isPrestataire()){
          console.log("");
          this.router.navigate(['/component/prestataire']);}
    
  }
}

  authenticated() {
     //this.utilisateurService.getUtilisateur(this.cuserId);
     //this.stringUserId=userId!== null ? JSON.parse(userId) : new Servicee();

    return this.appService.authenticated;
  }

  isAdmin() {
    return this.appService.isAdmin;
  }
  isClient() {
    return this.appService.isClient;
  }
  isPrestataire() {
    return this.appService.isPrestataire;
  }
  

}
