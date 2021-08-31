import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Avis } from 'src/app/models/avis';
import { Evenement } from 'src/app/models/evenement';
import { Reservation } from 'src/app/models/reservation';
import { Servicee } from 'src/app/models/servicee';
import { AdresseService } from 'src/app/Service/adresse.service';
import { CatalogueService } from 'src/app/Service/catalogue.service';
import { EvenementService } from 'src/app/Service/evenement.service';
import { ReservationService } from 'src/app/Service/reservation.service';

@Component({
  selector: 'app-client-consultation-evenement',
  templateUrl: './client-consultation-evenement.component.html'
})
export class ClientConsultationEvenementComponent implements OnInit {
  eventExtra:any=null;
  reservationExtra:any=null;
  serviceExtra:any=null;
  event:Evenement=new Evenement();
  avis:Avis = new Avis();
  reservation:Reservation = new Reservation();
  service:Servicee = new Servicee();
  align:string="center";
  categories = [{id:0, value:"Toutes les catégories"},
                {id:1, value:"Musique"},
                {id:2, value:"Sciences"},
                {id:3, value:"Sport"},
                {id:4, value:"Art"}];
  ville:String='Saint Cloud';
  constructor(private evenementService: EvenementService,
              private modalService: NgbModal,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.findAllReservations();
    //this.findAllEvents();
    this.categories;
    this.event.categorie = "Toutes les catégories"
    this.getEventsByCategorie();
  }
  findAllEvents(){
    this.evenementService.findAll().subscribe(data=>{this.eventExtra=data});
  }
  findAllReservations(){
    this.reservationService.findAll().subscribe(data=>{this.reservationExtra=data});
  }
  deleteEvents(id:number){
    //this.reservationService.deleteByIdEvenement(id).subscribe(()=>{this.findAllReservations()});//marche pas je crois
    this.evenementService.delete(id).subscribe(()=>{this.findAllEvents()})
  }
  saveEvents(){//
    this.evenementService.save(this.event).subscribe(()=>{this.findAllEvents();
    this.event=new Evenement();})
  }
  getEventsById(id:number){
    //this.evenementService.findOne(id).subscribe(data=>{this.eventExtra=data});
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
  //for the recherche par cat
  getEventsByCategorie(){
    console.log("categorie : " + this.event.categorie);
    if (this.event.categorie != "Toutes les catégories"){
      this.evenementService.findByCategorie(this.event.categorie).subscribe(data=>{this.eventExtra=data});
    }
    else{
      this.findAllEvents();
    }
  }
  findService(theEvent:Evenement){
    console.log("reservationExtra " + this.reservationExtra);
    console.log(theEvent.idEvenement);
    for (var pas = 0; pas < this.reservationExtra.length; pas++) {
      console.log(this.reservationExtra[pas].service);
      if (this.reservationExtra[pas].evenement != null &&
          (this.reservationExtra[pas].evenement.idEvenement == theEvent.idEvenement)){
        console.log('count final : ' + this.reservationExtra[pas].countFinal);
        this.service = this.reservationExtra[pas].service;
        this.service = new Servicee();
        console.log('liste des services : ' + this.service)
      }
    }
  }
}

