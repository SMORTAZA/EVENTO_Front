import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/models/evenement';
import { Reservation } from 'src/app/models/reservation';
import { Servicee } from 'src/app/models/servicee';
import { AdresseService } from 'src/app/Service/adresse.service';
import { CatalogueService } from 'src/app/Service/catalogue.service';
import { EvenementService } from 'src/app/Service/evenement.service';
import { ReservationService } from 'src/app/Service/reservation.service';
import { ServiceeService } from 'src/app/Service/servicee.service';
import { ClientConsultationEvenementComponent } from '../client-consultation-evenement/client-consultation-evenement.component';

@Component({
  selector: 'app-client-creation-evenement',
  templateUrl: './client-creation-evenement.component.html',
})
export class ClientCreationEvenementComponent implements OnInit {
  eventExtra:any=null;
  serviceExtra:any=null;
  reservationExtra:any=null;
  event:Evenement=new Evenement();
  servicee:Servicee=new Servicee();
  reservation:Reservation = new Reservation(); 
  total:number=0;
  align:string = "center";
  dateDuJour:Date=new Date();
  constructor(private evenementService: EvenementService,
              private serviceService: ServiceeService,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.findAllEvents();
    this.findAllServices();
  }
  findAllEvents(){
    this.evenementService.findAll().subscribe(data=>{this.eventExtra=data});
  }
  deleteEvents(id:number){
    this.evenementService.delete(id).subscribe(()=>{this.findAllEvents()})
  }
  saveEvents(){
    this.evenementService.save(this.event).subscribe(()=>{this.findAllEvents();
    this.event=new Evenement();})
  }
  findAllServices(){
    this.serviceService.findAll().subscribe(data=>{this.serviceExtra=data});
  }
  onClicked(oneservice: Servicee, event:any) {
    this.total = 0;
    console.log("event  " + this.serviceExtra.length);
    console.log("event  checked" + event.target.checked);
    console.log("event  checked" + event.target.value);
    for (var i = 0; i < this.serviceExtra.length; i++) {
        console.log("test --- " + this.serviceExtra[i].idService);
        if (this.serviceExtra[i].idService == event.target.value) {
            this.serviceExtra[i].checked = event.target.checked;
        }
        console.log("after update of checkbox" + this.serviceExtra[i].checked);
        if (this.serviceExtra[i].checked) {
          console.log(this.serviceExtra[i].idService);
          console.log(this.serviceExtra[i].tarif);
          this.total += Number(this.serviceExtra[i].tarif);
        }
    }
    console.log("TOTAL = " + this.total);
  }
  findAllReservations(){
    this.reservationService.findAll().subscribe(data=>{this.reservationExtra=data});
  }
  saveReservations(){
    //this.reservation.date = this.dateDuJour.getDate();//voir comment gérer la date
    this.reservation.countFinal = this.total;
    this.reservationService.save(this.reservation).subscribe(()=>{this.findAllReservations();
      this.reservation=new Reservation();})
  }
  saveAnEvent(){
    this.saveReservations();
    this.saveEvents();
  }
}
