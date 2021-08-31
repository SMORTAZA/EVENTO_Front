import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-prestataire',
  templateUrl: './prestataire.component.html'
})
export class PrestataireComponent implements OnInit {

  constructor(private appService: AppService, private router:Router) { }
  align:String="center";
  ngOnInit(): void {
    if(!this.authenticated()){
      this.router.navigate(['/component/login']);}
      if (!this.isPrestataire()){
        this.router.navigate(['/component/home']);}
  }
  authenticated() {
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
