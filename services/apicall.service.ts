import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { 
    
  }

  getEevee(){
    this.http.get('https://pokeapi.co/api/v2/pokemon/eevee');
  }

  getNinetales(){
    this.http.get('https://pokeapi.co/api/v2/pokemon/ninetales');
  }

  getVenonat(){
    this.http.get('https://pokeapi.co/api/v2/pokemon/venonat');
  }

  getAbra(){
    this.http.get('https://pokeapi.co/api/v2/pokemon/abra');
  }
}
