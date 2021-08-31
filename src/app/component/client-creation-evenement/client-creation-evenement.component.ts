import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Adresse } from 'src/app/models/adresse';
import { Catalogue } from 'src/app/models/catalogue';
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
  adresseExtra:any=null;
  event:Evenement=new Evenement();
  servicee:Servicee=new Servicee();
  reservation:Reservation = new Reservation(); 
  adresse:Adresse = new Adresse();
  adressetmp:Adresse = new Adresse();
  total:number=0;
  totalColor:String="color:green; font-weight: bold;";
  align:string = "center";
  dateDuJour:Date=new Date();
  categories = [{id:1, value:"Musique"},
                {id:2, value:"Sciences"},
                {id:3, value:"Sport"},
                {id:4, value:"Art"}];
  constructor(private evenementService: EvenementService,
              private serviceService: ServiceeService,
              private reservationService: ReservationService,
              private adresseService: AdresseService,
              private appService:AppService) { }

  ngOnInit(): void {
    this.findAllEvents();
    this.findAllServices();
    this.findAllAdresses();
    this.categories;
  }
  findAllEvents(){
    this.evenementService.findAll().subscribe(data=>{this.eventExtra=data});
  }
  deleteEvents(id:number){
    this.evenementService.delete(id).subscribe(()=>{this.findAllEvents()})
  }
  saveEvents(){
    console.log("categorie dans event : " + this.event.categorie)
    this.event.adresse = this.adresse;
    console.log("adresseId in event : " + this.adresse.idAdresse);
    this.evenementService.save(this.event).subscribe(()=>{this.findAllEvents();
    this.event=new Evenement();})
  }
  findAllServices(){
    this.serviceService.findAll().subscribe(data=>{this.serviceExtra=data});
  }
  findAllAdresses(){
    this.adresseService.findAll().subscribe(data=>{this.adresseExtra=data});
  }
  saveAdresses(){
    this.adressetmp = this.adresse;
    console.log("dans saveAdresse : " + this.adresse.idAdresse);
    this.adresseService.save(this.adresse).subscribe(()=>{this.findAllAdresses();
    this.adresse=new Adresse();})
    console.log(this.adressetmp.idAdresse);
    console.log(this.adressetmp.ville);
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
        console.log("budget : " + this.event.budget);
        if(this.total <= this.event.budget) {
          this.totalColor="color:green; font-weight: bold;";
        }
        else{
          this.totalColor="color:red; font-weight: bold;";
        }
    }
    console.log("TOTAL = " + this.total);
  }
  findAllReservations(){
    this.reservationService.findAll().subscribe(data=>{this.reservationExtra=data});
  }
  saveReservations(){
    this.reservation.date = new Date();//voir comment gérer la date
    this.reservation.countFinal = this.total;
    this.reservationService.save(this.reservation).subscribe(()=>{this.findAllReservations();
      this.reservation=new Reservation();})
  }
  saveAnEvent(){
    this.saveAdresses();
    this.saveReservations();
    this.saveEvents();
  }
  
  log(){
    if(this.appService.isAdmin==false && this.appService.isClient==true && this.appService.isPrestataire ==false ){
      return true;
    }else{
      return false;
    }
  }
}
