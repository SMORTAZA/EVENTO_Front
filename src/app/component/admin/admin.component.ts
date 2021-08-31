import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/models/evenement';
import { Abonnement } from 'src/app/models/abonnement';
import { AbonnementService } from 'src/app/Service/abonnement.service';
import { AdresseService } from 'src/app/Service/adresse.service';
import { CatalogueService } from 'src/app/Service/catalogue.service';
import { EvenementService } from 'src/app/Service/evenement.service';
import { Avis } from 'src/app/models/avis';
import { AvisService } from 'src/app/Service/avis.service';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { RecentSale, recentSales } from 'src/app/dashboard/dashboard-components/recent-table/recent-table-data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  
	styles: [
		`
			.star {
				font-size: 1.5rem;
				color: #b0c4de;
			}
			.filled {
				color: #1e90ff;
			}
			.heart {
				position: relative;
				display: inline-block;
				font-size: 3rem;
				color: #d3d3d3;
			}
			.full {
				color: red;
			}
			.half {
				position: absolute;
				display: inline-block;
				overflow: hidden;
				color: red;
			}
			.bad {
			color: #deb0b0;
		}
		.filled.bad {
			color: #ff1e1e;
		}
		`
	]
})

export class AdminComponent implements OnInit {
  eventExtra:any=null;
  abonnementExtra:any=null;
  avisExtra:any=null;
	nom:string='';
	note:number=0;
  event:Evenement=new Evenement();
  abonnement:Abonnement=new Abonnement();
  avis:Avis=new Avis();
  public isCollapsed = false;

  collapsed = true;


  constructor(private evenementService:EvenementService,private catalogueService:CatalogueService,private adresseService:AdresseService, private abonnementService:AbonnementService, private avisService:AvisService, private appService:AppService) { }

  currentRate = 8;
	currentRate2 = 0;
	selected = 0;
	hovered = 0;
	readonly = false;
	// for form integration
	ctrl = new FormControl(null, Validators.required);

	authenticated(){
		return this.appService.authenticated;
	  }
	toggle() {
		if (this.ctrl.disabled) {
			this.ctrl.enable();
		} else {
			this.ctrl.disable();
		}
	}
  	ngOnInit(): void {
		this.findAllEvents();
		this.findAllAbonnements();
		this.findAllAvis();
		this.getEventsByName();
		this.getAbonnementsByName();
		this.getAvisByNote();
		this.nom='';
		

	
  	}
  	onSubmit(){
	  this.getEventsByName();
  	}
  	onSubmit1(){
		this.getAbonnementsByName();
	}
	onSubmit2(){
	this.getAvisByNote();
	}

	log(){
	if(this.appService.isAdmin==true && this.appService.isClient==false && this.appService.isPrestataire ==false ){
		return true;
	}else{
		return false;
	}	
}

	findAllEvents(){
	this.evenementService.findAll().subscribe(data=>{this.eventExtra=data});
	}

	deleteEvents(id:number){
	this.evenementService.delete(id).subscribe(()=>{this.findAllEvents()})
	}

	saveEvents(){
	console.log("save:"+this.event);
	this.evenementService.save(this.event).subscribe(()=>{this.findAllEvents();
	this.event=new Evenement();})
	}

	getEventsByName(){
	this.evenementService.findByName(this.nom).subscribe(data=>{this.eventExtra=data});

	}

	// *******************************Méthodes abonnements**************************************
	findAllAbonnements(){
	this.abonnementService.findAll().subscribe(data=>{this.abonnementExtra=data});
	}
	deleteAbonnement(id:number){
	this.abonnementService.delete(id).subscribe(()=>{this.findAllAbonnements()})
	}
	saveAbonnements(){
	this.abonnementService.save(this.abonnement).subscribe(()=>{this.findAllAbonnements();
	this.abonnement=new Abonnement();})
	}

	getAbonnementsByName(){
	this.abonnementService.findByName(this.nom).subscribe(data=>{this.abonnementExtra=data});
	
	}

	// ******************************* Méthodes Avis / Réclamations ********************************

	findAllAvis(){
	this.avisService.findAll().subscribe(data=>{this.avisExtra=data});
	}
	deleteAvis(id:number){
	this.avisService.delete(id).subscribe(()=>{this.findAllAvis()})
	}
	saveAvis(){
	this.avisService.save(this.avis).subscribe(()=>{this.findAllAvis();
	this.avis=new Avis();})
	}

	getAvisById(id:number){
	this.avisService.findOne(id).subscribe(data=>{this.avisExtra=data});
	
	}

	getAvisByNote(){
	this.avisService.findByNote(this.note).subscribe(data=>{this.avisExtra=data});
	}


}




