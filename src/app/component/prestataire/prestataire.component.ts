import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-prestataire',
  templateUrl: './prestataire.component.html'
})
export class PrestataireComponent implements OnInit {

  constructor(private appService: AppService) { }
  ngOnInit(): void {
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
