import { Component, OnInit, Input } from '@angular/core';
import { Pokemons } from '../shared/models/pokemons.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-pokemons-edit',
  templateUrl: './pokemons-edit.component.html',
  styleUrls: ['./pokemons-edit.component.scss']
})
export class PokemonsEditComponent implements OnInit {
  
  @Input() pokEdit: Pokemons;
  constructor() { }

  ngOnInit() {
  }

}
