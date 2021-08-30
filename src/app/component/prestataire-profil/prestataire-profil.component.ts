import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ServiceeService } from 'src/app/Service/servicee.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-prestataire-profil',
  templateUrl: './prestataire-profil.component.html'
})
export class PrestataireProfilComponent implements OnInit {
  editForm: FormGroup= this.formBuilder.group({});
  user:Utilisateur = new Utilisateur;
  dateNaissance?:Date;
  constructor(private router:Router, private utilisateurService:UtilisateurService, private serviceeService:ServiceeService, private appService:AppService, 
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   var userId = localStorage.getItem("loggedUserId");
  if(!userId){
    alert("Invalid Action ...");
    this.router.navigate(['/component/login']);
    return;
  }
  this.editForm = this.formBuilder.group({
    idUtilisateur:[],roles:[], enabled:[], password:[], status:[], noteMoyenne:[],abonnement:[],evenements:[],
    nom : ['', Validators.required],
    prenom : ['',Validators.required],
    username : ['',Validators.required],
    dateNaissance:['',Validators.required],
    mail:['',Validators.required],
    contact:['',Validators.required],
    description:['',Validators.required]
  })
  this.utilisateurService.getUtilisateur(+userId).subscribe(data => {this.editForm.setValue(data);});
  this.utilisateurService.getUtilisateur(+userId).subscribe(response => {
    this.dateNaissance= response['dateNaissance']});
  
}
updateProfilPrestataire(){
  console.log("update component");
  var varJson = JSON.stringify(this.editForm.value);
  console.log(varJson);
  this.utilisateurService.updateUtilisateur(varJson).subscribe(()=>{this.router.navigate(['/component/prestataire-profil']);});
  console.log("fin update component");
}

}
