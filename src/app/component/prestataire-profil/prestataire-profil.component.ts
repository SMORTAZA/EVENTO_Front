import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-prestataire-profil',
  templateUrl: './prestataire-profil.component.html',
  styleUrls: ['./prestataire-profil.component.css']
})
export class PrestataireProfilComponent implements OnInit {

  constructor(private httpClient: HttpClient, private utilisateurService:UtilisateurService) { }
  loggedUser:Utilisateur=new Utilisateur();

  public updateProfilPrestataire(user:any) {
    return this.utilisateurService.updateUtilisateur(user);
  }
  
  ngOnInit(): void {
    //loggedUser=getConnectedUser();
  }

}
