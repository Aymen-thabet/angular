import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http : HttpClient) { }

  getResidence(): Observable <Residence[]> {
    return this.http.get<Residence[]>('http://localhost:3000/residences');
  }
  getResidenceById(id:number):Observable<Residence> {
    return this.http.get<Residence>('http://localhost:3000/residences/'+id)
  }
  addResidence(res:Residence):Observable<Residence>{
    return this.http.post<Residence>('http://localhost:3000/residences',res)
  }
}
