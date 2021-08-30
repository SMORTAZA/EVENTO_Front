import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ServiceeService } from 'src/app/Service/servicee.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-prestataire-offres',
  templateUrl: './prestataire-offres.component.html'
})
export class PrestataireOffresComponent implements OnInit {
  editForm: FormGroup= this.formBuilder.group({});

  offresUser:any;

  constructor(private router:Router, private utilisateurService:UtilisateurService, private offreService:ServiceeService,
    private formBuilder:FormBuilder, private appService:AppService) { }

  ngOnInit(): void {
    var userId = localStorage.getItem("loggedUserId");
    if(!userId){
      alert("Invalid Action ...");
      this.router.navigate(['/component/login']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idServicee:[],
      description:['',Validators.required],
      tarif:['',Validators.required]
      //Image à rajouter
    })
    this.findAllOffresFromUser(userId);
  
  }
  findAllOffresFromUser(id:string){
  this.offreService.findOffresPrestataire(parseInt(id)).subscribe(data=>{this.offresUser=data});
  }
  updateOffre(){}
}
