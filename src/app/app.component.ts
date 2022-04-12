
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokemonService]
})
export class AppComponent implements OnInit{
  poke: any;
  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  
 
  
  constructor(private srv: PokemonService){
  }

  posts = [
    {title: 'Ninetales',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    username: '@FIRE',
    content: 'Moves: flash-fire, drought'
    },
    {title: 'Eevee',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    username: '@NORMAL',
    content: 'Moves: adaptability, anticipation'
    },
    {title: 'Venonat',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    username: '@BUG/POISON',
    content: 'Moves: compound-eyes, tinted-lens'
    },
    {title: 'Abra',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    username: '@PSYCHIC',
    content: 'Moves: synchronize, inner-focus'
    }
  ]

  getpoke():void{
    this.srv.getData(this.url).subscribe(data=>this.poke=data);

  }

  ngOnInit(){
    this.getpoke();

  }
  
  }


