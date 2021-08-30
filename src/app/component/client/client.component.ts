import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/models/evenement';
import { AdresseService } from 'src/app/Service/adresse.service';
import { CatalogueService } from 'src/app/Service/catalogue.service';
import { EvenementService } from 'src/app/Service/evenement.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  eventExtra:any=null;
  
  event:Evenement=new Evenement();
  constructor(private evenementService: EvenementService,
              private catalogueService:CatalogueService,
              private adresseService:AdresseService) { }

  ngOnInit(): void {
    this.findAllEvents();
  }
  findAllEvents(){
    console.log(this.eventExtra);
    this.evenementService.findAll().subscribe(data=>{this.eventExtra=data});
    console.log(this.eventExtra);
  }
  deleteEvents(id:number){
    this.evenementService.delete(id).subscribe(()=>{this.findAllEvents()})
  }
  saveEvents(){
    console.log(this.event);
    this.evenementService.save(this.event).subscribe(()=>{this.findAllEvents();
    this.event=new Evenement();})
  }
  
  
}
