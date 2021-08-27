import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  credentials ={username:'',password:''}
  constructor(private appService:AppService,private httpClient:HttpClient,private router:Router){}
  ngOnInit():void{

  }
  login(){
    this.appService.authenticate(this.credentials,() => {this.router.navigateByUrl("/component/prestataire")});
    return false;
  }

}
