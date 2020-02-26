import { Injectable } from '@angular/core';
import { Pokemons } from '../models/pokemons.model';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationsService } from 'src/app/core/notifications.service';

@Injectable({
  providedIn: 'root'
})


export class PokemonsService {

  private _pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  constructor(private _http: HttpClient,
    _notificationsService: NotificationsService) { }

  getPokemons(offset: number = 0, limit: number = 30): Pokemons[] {
    // Lo que voy a devolver
    const POK: Pokemons[] = [];
    const getUrl = this._pokeApiUrl + `?offset=${offset}&limit=${limit}`;

    this._http.get(getUrl).subscribe((result: any) => {
      result['results'].forEach((val: any) => {
        const name: string = val.name;
        const id: number = +(val.url.split('/').slice(-2,-1)[0]);
        POK.push(new Pokemons(id, name, 100, 10));

      })
    });
    return POK;
  }

  getPokemonsObserv(offset: number = 0, limit: number = 30): Observable<Pokemons[]> {
    // Lo que voy a devolver
    const POK: Pokemons[] = [];
    const scope = this;
    const getUrl = this._pokeApiUrl + `?offset=${offset}&limit=${limit}`;


    scope._http.get(getUrl).subscribe((result: any) => {
      result['results'].forEach((val: any) => {

        scope._http.get(val.url).subscribe((pokData: any) => {
          POK.push(new Pokemons(
            pokData.id,
            pokData.name,
            pokData.base_experience,
            pokData.weight)
            );
        });
      });
    });
    return of(POK);
  }


  

  // Obtenemos los datos en bruto que nos devuelve la API
  getRawPokemon(id: number): Observable<any> {
    return this._http.get(this._pokeApiUrl + '/' + id);
  }

   
  /** POST: Añadir un nuevo Pokemon en el servidor */
  addPokemon(pok: Pokemons): Observable<Pokemons> {
    return this._http.post<Pokemons>(this._pokeApiUrl, pok, this.httpOptions).pipe(
      tap((newPok: Pokemons) => this.log(`added Pokemon con id=${newPok.id}`)),
      catchError(this.handleError<Pokemons>('addPokemon'))
    );
  }
 
  /** PUT: Modificar un Pokemon en el servidor */
  updatePokemons(pok: Pokemons): Observable<any> {
    return this._http.put(this._pokeApiUrl, pok, this.httpOptions).pipe(
      tap(_ => this.log(`updated pok id=${pok.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }
  // DELETE: Borrar Pokemon por objeto o ID en el servidor
  deletePokemon(pok: Pokemons | number): Observable<Pokemons> {
    const id = typeof pok === 'number' ? pok : pok.id;
    const url = `${this._pokeApiUrl}/${id}`;
 
    return this._http.delete<Pokemons>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted pok id=${id}`)),
      catchError(this.handleError<Pokemons>('deletepok'))
    );
  }
 
  private handleError<T>(method = 'operación', result?: T) {
    return (error: any): Observable<T> => {
 
      // Aquí iría la gestión del error...
 
      // Lo mostramos en consola
      console.error(error);
 
      // Mostramos el error como notificación
      this.log(`${method} falló: ${error.message}`);
 
      // Devolvemos un resultado vacío
      return of(result as T);
    };

    
  }

  private log(msg: string): void {
    // this._notificationsService.add(`PokemonsService: ${msg}`);
   // this._notificationsService.add('PokemonsList: ' + msg);
  }

}

