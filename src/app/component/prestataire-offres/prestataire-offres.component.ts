import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult='';

  constructor(private router:Router, private utilisateurService:UtilisateurService, private offreService:ServiceeService,
    private formBuilder:FormBuilder, private appService:AppService,private modalService: NgbModal) { }

  ngOnInit(): void {
    var userId = localStorage.getItem("loggedUserId");
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
  updateOffre(){}

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
  toggleUpdateForm(){
    if (this.updateFormHidden){
      this.updateFormHidden=false;
    }else{
      this.updateFormHidden=true;
    }
  }
	open(content:string) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}
  private getDismissReason(reason: ModalDismissReasons): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
	}

}
