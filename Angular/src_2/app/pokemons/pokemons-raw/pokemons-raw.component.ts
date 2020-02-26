import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'src/app/core/notifications.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pokemons-raw',
  templateUrl: './pokemons-raw.component.html',
  styleUrls: ['./pokemons-raw.component.scss']
})
export class PokemonsRawComponent implements OnInit {

  rawPoke$; // El convenio es que cuando trabajemos directamente con observables,
  // el nombre de la propiedad o variable acabe en $ 
  

  constructor(
    private _pokemonsService: PokemonsService,
    private _ruta: ActivatedRoute,
    private _notificationsService: NotificationsService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.getRawPoke();
  }

  getRawPoke(): void {
    const id: number = +this._ruta.snapshot.paramMap.get('id');
    this.rawPoke$ = this._pokemonsService.getRawPokemon(id);
    this._notificationsService.add('PokemonsRawComponent: Obtengo los datos en crudo del pokemon con id: ' + id)
  }

  goBack(): void {
    this._location.back();
  }


}
