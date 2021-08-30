import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { isAccessor } from 'typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  credentials = { username: '', password: '' }
  constructor(private appService: AppService, private httpClient: HttpClient, private router: Router) { }
  ngOnInit(): void {

  }
  login() {
    //console.log("Login 1");
    this.appService.authenticate(this.credentials, () => {
      //console.log("Login 1-1");
      if (this.appService.isAdmin) {
        //console.log("Login 2");
        this.router.navigateByUrl("/component/admin");
      }
      else if (this.appService.isPrestataire && !this.appService.isClient) {
        //console.log("Login 3");
        this.router.navigateByUrl("/component/prestataire");
      }
      else if ((!this.appService.isPrestataire && this.appService.isClient)) {
        //console.log("Login 4");
        this.router.navigateByUrl("/component/client");
      } else if ((this.appService.isPrestataire && this.appService.isClient)) {
        //console.log("Login 5");
        this.router.navigateByUrl("/component/accueil");
      }
      return false;
    }
  );
}
}
