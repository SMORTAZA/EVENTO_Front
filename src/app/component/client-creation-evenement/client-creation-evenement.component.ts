import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/models/evenement';
import { Servicee } from 'src/app/models/servicee';
import { AdresseService } from 'src/app/Service/adresse.service';
import { CatalogueService } from 'src/app/Service/catalogue.service';
import { EvenementService } from 'src/app/Service/evenement.service';
import { ServiceeService } from 'src/app/Service/servicee.service';

@Component({
  selector: 'app-client-creation-evenement',
  templateUrl: './client-creation-evenement.component.html',
})
export class ClientCreationEvenementComponent implements OnInit {
  eventExtra:any=null;
  serviceExtra:any=null;
  event:Evenement=new Evenement();
  servicee:Servicee=new Servicee();
  constructor(private evenementService: EvenementService,
              private serviceService: ServiceeService) { }

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
}
