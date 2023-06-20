import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Yeoman {
    virtualRoute:any="dashboard";
    pop:Boolean=false;
    data:any={};
    products:any={};
    // products:any[]=[];
    currency:number=1;  
    constructor() {}
}