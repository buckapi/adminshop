import { Component, OnInit } from '@angular/core';
import { Butler } from '@app/services/butler.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(   public _butler:Butler) { 
 
  }
  setRoute(route:any){
    this._butler.virtualRoute=route;
  }
  ngOnInit(): void {
  }

}
