import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { PokemonsRawComponent } from './pokemons/pokemons-raw/pokemons-raw.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth-guard.service';


const routes: Routes = [

  
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // {path: 'pokemons/full-details/:id/:name/:xxx'}
  
  { path: 'pokemons', component: PokemonsComponent, canActivate: [AuthGuardService]},
  { path: 'pokemons/raw/:id', component: PokemonsRawComponent, canActivate: [AuthGuardService]},

  // Login
  { path: 'login', component: LoginComponent },

  // Por defecto lo mandamos a pokemons
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },

  // Si no es válida, también lo mandamos a pokemons (o a 404)
  { path: '**', redirectTo: '/pokemons' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
