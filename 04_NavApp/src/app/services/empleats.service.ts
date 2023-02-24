import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleatsService {
  empleats: any[] = [
    {
      id:0,isActive:false,age:39,
      name:{first:"Benja",last:"Armijo"},
      company:"Mondongo",
      email:"benjaarmijo@ginebro.cat",
      favouriteFruit:"mandarina"    
    },
    {
      id:1,isActive:false,age:65,
      name:{first:"Xavi",last:"Garcia"},
      company:"Mondongo 2",
      email:"xavigarcia@ginebro.cat",
      favouriteFruit:"coco"    
    },
    {
      id:2,isActive:false,age:25,
      name:{first:"Adrián",last:"González"},
      company:"ClickEdu",
      email:"adriangonzalez@ginebro.cat",
      favouriteFruit:"plàtan"    
    },
  ]

  constructor() { }

  getEmpleats(){
    return this.empleats;
  }

  getEmpleat(id:number){
    return this.empleats[id];
  }
}
