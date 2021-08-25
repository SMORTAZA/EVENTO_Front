import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  usersExtra: any;
  user: Utilisateur = new Utilisateur();
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
   this.findAll();
  }
  findAll(){
    this.utilisateurService.findAll().subscribe(data => {this.usersExtra = data})
  }
  deleteUser(id:number){
    console.log("id="+id);
    this.utilisateurService.delete(id).subscribe(
      () => {this.findAll()}
    )
  }
  /*saveUser(){
    this.utilisateurService.save(this.user).subscribe(()=> {this.findAll();
    this.user = new Utilisateur();}
    )
  }*/
}

