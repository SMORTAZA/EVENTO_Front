import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
//declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Output()
  toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  constructor(private httpClient:HttpClient,private appService:AppService,private router:Router) {}
  logout(){
    this.httpClient.post("http://localhost:9090/logout",{}).subscribe(()=> {this.appService.authenticated=false;
  this.router.navigateByUrl('/component/login');
})
}
}
