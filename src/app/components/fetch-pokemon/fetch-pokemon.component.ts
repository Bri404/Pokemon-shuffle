import { ApicallService } from './../../services/apicall.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-pokemon',
  templateUrl: './fetch-pokemon.component.html',
  styleUrls: ['./fetch-pokemon.component.css']
})
export class FetchPokemonComponent implements OnInit {
  eeveeList:any;
  ninetalesList:any;
  venonatList:any;
  abraList:any;


  constructor(private appService: ApicallService) { }

  ngOnInit(): void {

    this.eeveeList = this.appService.getEevee();
    this.ninetalesList = this.appService.getNinetales();
    this.venonatList = this.appService.getVenonat();
    this.abraList = this.appService.getAbra();

    
  }

}
