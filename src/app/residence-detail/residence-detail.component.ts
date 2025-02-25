import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-detail',
  templateUrl: './residence-detail.component.html',
  styleUrls: ['./residence-detail.component.css']
})
export class ResidenceDetailComponent {

  constructor(private rs :ResidenceService,private Ac: ActivatedRoute){}  //ac bech najem n acitivi fazet eni nhez id mel lien
    id!:number;
    residence !: Residence 

  ngOnInit(){ //kol ma tet7al page yaani on init tsir haka
    this.id=this.Ac.snapshot.params['id']; // njib id mel url
    this.rs.getResidenceById(this.id).subscribe((data) =>this.residence = data);
    
  }
  

  
}