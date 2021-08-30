import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Evenement } from 'src/app/models/evenement';
import { AdresseService } from 'src/app/Service/adresse.service';
import { CatalogueService } from 'src/app/Service/catalogue.service';
import { EvenementService } from 'src/app/Service/evenement.service';

@Component({
  selector: 'app-client-consultation-evenement',
  templateUrl: './client-consultation-evenement.component.html'
})
export class ClientConsultationEvenementComponent implements OnInit {
  eventExtra:any=null;
  event:Evenement=new Evenement();
  align:string="center";
  constructor(private evenementService: EvenementService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.findAllEvents();
  }
  findAllEvents(){
    console.log("av  " + this.eventExtra);
    this.evenementService.findAll().subscribe(data=>{this.eventExtra=data});
    console.log("ap : " + this.eventExtra);
  }
  deleteEvents(id:number){
    this.evenementService.delete(id).subscribe(()=>{this.findAllEvents()})
  }
  saveEvents(){
    console.log(this.event);
    this.evenementService.save(this.event).subscribe(()=>{this.findAllEvents();
    this.event=new Evenement();})
  }
  
  getEventsById(id:number){
    //this.evenementService.findOne(id).subscribe(data=>{this.eventExtra=data});
  }

  getEventsByCategorie(categorie:String){
    this.evenementService.findByCategorie(categorie).subscribe(data=>{this.eventExtra=data});
    console.log(this.eventExtra);
  }
  // This is for the modal
  closeResult: string='';
	open1(content1:string) {
		this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
