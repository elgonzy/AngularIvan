import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleatsService } from 'src/app/services/empleats.service';

@Component({
  selector: 'app-empleat',
  templateUrl: './empleat.component.html',
  styleUrls: ['./empleat.component.css']
})
export class EmpleatComponent implements OnInit {
  empleat: any={};

  constructor(private empleatsServei: EmpleatsService, private rutaActiva: ActivatedRoute ) { 
    this.rutaActiva.params.subscribe(
      (parametre1)=>{this.empleat=this.empleatsServei.getEmpleat(parametre1['id'])}
    )
    
    
    
    
  }

  ngOnInit(): void {
  }

}
