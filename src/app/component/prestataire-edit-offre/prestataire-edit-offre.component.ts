import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicee } from 'src/app/models/servicee';
import { ServiceeService } from 'src/app/Service/servicee.service';

@Component({
  selector: 'app-prestataire-edit-offre',
  templateUrl: './prestataire-edit-offre.component.html'
})
export class PrestataireEditOffreComponent implements OnInit {

  editForm: FormGroup;
  offre:Servicee = new Servicee();
  selectedFiles!: FileList;
  currentFileUpload!: File;

  constructor(private router:Router, private serviceeService:ServiceeService, 
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let offreId = localStorage.getItem("editOffreId");
    this.offre.idService=offreId!== null ? JSON.parse(offreId) : new Servicee();
    console.log("edit : id :"+this.offre.idService);
    if(!offreId){
      alert("Invalid Action ...");
      this.router.navigate(['/component/prestataire-offres']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idService:[],
      description : ['', Validators.required],
      tarif : ['',Validators.required],
      image:['',Validators.required],
      avis:[],prestataire:[]    })
    this.serviceeService.findOne(+offreId).subscribe(data => {this.editForm.setValue(data);});
  }
  updateOffre(){
    var varJson = JSON.stringify(this.editForm.value);
    this.serviceeService.updateServicee(varJson).subscribe(()=>{this.router.navigate(['/component/prestataire-offres']);});
  }
  selectFile(event: { target: { files: any; }; }){
    this.selectedFiles = event.target.files;
  }
  /*saveOffre(){
    let file: File = this.selectedFiles.item(0) as File;
    this.currentFileUpload = file;
    this.offreService.save(file,this.offre,""+localStorage.getItem("loggedUserId")).subscribe(
      () => {this.findAllOffresFromUser(""+localStorage.getItem("loggedUserId")); this.offre= new Servicee(); }
    );
    this.affFormHidden=true;
  }*/

}
