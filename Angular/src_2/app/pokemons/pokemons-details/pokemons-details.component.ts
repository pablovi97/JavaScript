import { Component, OnInit, Input } from '@angular/core';
import { Pokemons } from '../shared/models/pokemons.model';

@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.scss']
})
export class PokemonsDetailsComponent implements OnInit {

  /*
  // Este era el pokemon de prueba
  pokemon: Pokemons = {
    id: 25,
    name: 'Pikachu',
    level: 56,
    hp: 230
  };
  */

  // El pokemon real lo vamos a recibir de la lista
  @Input() pokInput: Pokemons;

  constructor() { }

  ngOnInit() {
  }

}
