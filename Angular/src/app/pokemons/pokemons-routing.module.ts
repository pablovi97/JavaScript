import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons.component';
// import { PokemonsModule } from './pokemons.module';
import { PokemonsRawComponent } from './pokemons-raw/pokemons-raw.component';
import { AuthGuardService } from '../core/auth-guard.service';

const pokemonsRoutes: Routes = [

    /*
    {
      path: 'pokemons',
      component: PokemonsComponent,
      children: [

        { path: '', component: PokemonsComponent, canActivate: [AuthGuardService]},
        { path: 'raw/:id', component: PokemonsRawComponent, canActivate: [AuthGuardService]},
        { path: '**', redirectTo: 'pokemons'}
      ]
    }
    */

    // Para que funcione el lazy loading
   { path: '', component: PokemonsComponent, canActivate: [AuthGuardService]},
   { path: 'raw/:id', component: PokemonsRawComponent, canActivate: [AuthGuardService]},

   
    // Para poner varios router-outlet (por ejemplo footer, header)
    /* { path: 'prueba',

    prueba 
    prueba/h
    prueba/h/f
    prueba/f

    children: [
      { path: '', component: XXXX }, 
      { path: 'h', component: YYYY, outlet: 'header' },
      { path: 'f', component: ZZZZ, outlet: 'footer' }
    ]

    */
];



@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
