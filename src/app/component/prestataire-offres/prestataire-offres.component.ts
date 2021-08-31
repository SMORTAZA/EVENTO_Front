
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppService } from 'src/app/app.service';
import { Servicee } from 'src/app/models/servicee';

import { ServiceeService } from 'src/app/Service/servicee.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';


@Component({
  selector: 'app-prestataire-offres',
  templateUrl: './prestataire-offres.component.html'
})
export class PrestataireOffresComponent implements OnInit {
  editForm: FormGroup= this.formBuilder.group({});
  offre: Servicee=new Servicee();
  offresUser:any;
  selectedFiles!: FileList;
  currentFileUpload!: File;
  affFormHidden=true;
  updateFormHidden=true;
 numberUserId!:number;
 stringUserId!:string;

  constructor(private router:Router, private utilisateurService:UtilisateurService, private offreService:ServiceeService,
    private formBuilder:FormBuilder, private appService:AppService,private modalService: NgbModal) { }

  ngOnInit(): void {
    var userId = localStorage.getItem("loggedUserId");
    this.stringUserId=userId!== null ? JSON.parse(userId) : new Servicee();
    //this.numberUserId= parseInt(this.stringUserId,10);
    this.affFormHidden=true;
    this.updateFormHidden=true;
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

  selectFile(event: { target: { files: any; }; }){
    this.selectedFiles = event.target.files;
  }
  saveOffre(){
    let file: File = this.selectedFiles.item(0) as File;
    this.currentFileUpload = file;
    this.offreService.save(file,this.offre,""+localStorage.getItem("loggedUserId")).subscribe(
      () => {this.findAllOffresFromUser(""+localStorage.getItem("loggedUserId")); this.offre= new Servicee(); /*this.selectedFiles = undefined;*/}
    );
    this.affFormHidden=true;
  }
  toggleAddForm(){
    if (this.affFormHidden){
      this.affFormHidden=false;
    }else{
      this.affFormHidden=true;
    }
  }

deleteOffre(id:number){
  console.log("id="+id);
  this.offreService.delete(id).subscribe(() => {this.findAllOffresFromUser(this.stringUserId)})
}

  editOffre(offre2:Servicee){
    console.log("editOffre");
    localStorage.removeItem("editOffreId");
    localStorage.setItem("editOffreId",""+offre2.idService);
    console.log(localStorage.getItem("editOffreId"));
    this.router.navigate(['/component/prestataire-edit-offre']);
  }


}
