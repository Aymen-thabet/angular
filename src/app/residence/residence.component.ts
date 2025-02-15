import { Component } from '@angular/core';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/4.jpg", status: "En Construction"}
    ];
   
    showLocation: { [key: number]: boolean } = {};
    favorites: Residence[] = [];
  searchTerm: string = '';

  toggleLocation(id: number) {
    this.showLocation[id] = !this.showLocation[id];
  }
  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
    }
  }

  removeFromFavorites(residence: Residence) {
    this.favorites = this.favorites.filter(fav => fav.id !== residence.id);
  }

  isFavorite(residence: Residence): boolean {
    return this.favorites.some(fav => fav.id === residence.id);
  }

  get filteredResidences(): Residence[] {
    return this.listResidences.filter(r => r.address.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
