import { Component, OnInit, OnDestroy } from '@angular/core';
// import { POKEMONS } from '../shared/mocks/pokemons.mock';
import { Pokemons } from '../shared/models/pokemons.model';
import { PokemonsService } from '../shared/services/pokemons.service';
import { Subscription } from 'rxjs';
import { NotificationsService } from 'src/app/core/notifications.service';


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit, OnDestroy {

  // pokemons: Pokemons[] = POKEMONS; // Datos del Mock
  pokemons: Pokemons[];
  selectedPokemon: Pokemons | null = null;
  editPokemon: Pokemons | null = null;

  subscription: Subscription;

  constructor(
    private _pokemonsService: PokemonsService,
    private _notificationsService: NotificationsService
  ) {}


  private log(notif: string): void {
    this._notificationsService.add('Pokemons: ' + notif);
  }
  
  ngOnInit() {
    this.log('Cogiendo lista...');
    this.getListPokemons();
  }

  getListPokemons(): void {
    const scope = this;
    scope.log('Cojo la lista de la API...');
    // scope.pokemons = scope._pokemonsService.getPokemons(); // Función
    scope.subscription = scope._pokemonsService.getPokemonsObserv().subscribe(
      // pokObserv => scope.pokemons = pokObserv,
      // err => scope.log('ERROR Obteniendo pokemons!!' + err),
      // () => scope.log("Se han recibido todos los pokemons")
      {
        complete() { scope.log('Se ha completado!!!')},
        error(err) { scope.log('Error!!! ' + err)},
        next(pokObserv) { scope.pokemons = pokObserv; }

      }
    );
  }

  onSelect(pok: Pokemons): void {
    this.log('Selecciono el Pokemon...' + pok.name);
    // Cuando seleccionamos un pokemons
    // quitamos el que estábamos editando 
    // (si es que lo hacíamos)
    this.selectedPokemon = pok;
    this.editPokemon = null;
  }

  onEdit(pok: Pokemons): void {
    this.log('Edito el Pokemon...' + pok.name);
    // Cuando editamos un pokemon, también lo 
    // seleccionamos para ver los detalles
    this.editPokemon = pok;
    this.selectedPokemon = pok;
  }

  onDelete(pok: Pokemons): void {
    if (confirm('¿Realmente quiere eliminar el pokemon ' + pok.name +'?')) {
      this.log('Borro el Pokemon...' + pok.name);
      this.selectedPokemon = null;
      this.editPokemon = null;
      this.pokemons = this.pokemons.filter(p => p !== pok);
    }
  }

  onAdd(pok: Pokemons) {
    if (pok) {
      this.log('Añado el Pokemon...' + pok.name);
      this.pokemons.push(pok);
    } else {
      alert('Se ha recibido un pokemon vacío');
    }
  }

  ngOnDestroy(): void {
    this.log('Cancelo la subscripción a la API...');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
