import { Component, OnInit } from '@angular/core';
import { Butler } from '@app/services/butler.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(   public _butler:Butler) { 
 
  }
  setRoute(route:any){
    this._butler.virtualRoute=route;
  }
  ngOnInit(): void {
  }

}
