import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private appService:AppService,private router:Router) { }

  ngOnInit(): void {
    if(!this.authenticated()){
      console.log("!log");
    this.router.navigate(['/component/login']);}
    else{
      console.log("log");
 if(this.isAdmin()&&!this.isClient()&&!this.isPrestataire()){
  console.log("admin");
    this.router.navigate(['/component/admin']);}
    else if(!this.isAdmin()&&this.isClient()&&!this.isPrestataire()){
      console.log("1client");
      this.router.navigate(['/component/client']);}
      else if(!this.isAdmin()&&!this.isClient()&&this.isPrestataire()){
        console.log("presta");
        this.router.navigate(['/component/prestataire']);}
        else if(!this.isAdmin()&&this.isClient()&&this.isPrestataire()){
          console.log("clipresta");
          this.router.navigate(['/component/prestataire']);}
    }
  }
  authenticated() {
    return this.appService.authenticated;
  }

  isAdmin() {
    return this.appService.isAdmin;
  }
  isClient() {
    return this.appService.isClient;
  }
  isPrestataire() {
    return this.appService.isPrestataire;
  }

}
