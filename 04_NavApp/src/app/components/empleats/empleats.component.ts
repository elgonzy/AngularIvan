import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleatsService } from 'src/app/services/empleats.service';

@Component({
  selector: 'app-empleats',
  templateUrl: './empleats.component.html',
  styleUrls: ['./empleats.component.css']
})
export class EmpleatsComponent implements OnInit {
  empleats: any[] = [];

  constructor(private empleatsServei: EmpleatsService, private router: Router) { 
    this.empleats = empleatsServei.getEmpleats();
  }

  ngOnInit(): void {
  }

  mostrarEmpleat(id:number){
    this.router.navigate(['empleat',id]);
  }

}
