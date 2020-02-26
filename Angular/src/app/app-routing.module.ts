import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
// import { AuthGuardService } from './core/auth-guard.service';
// import { PokemonsRoutingModule } from './pokemons/pokemons-routing.module';
// import { PokemonsComponent } from './pokemons/pokemons.component';
// import { PokemonsRawComponent } from './pokemons/pokemons-raw/pokemons-raw.component';
const routes: Routes = [

  
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // {path: 'pokemons/full-details/:id/:name/:xxx'}
  
//  { path: 'pokemons', component: PokemonsComponent, canActivate: [AuthGuardService]},
//  { path: 'pokemons/raw/:id', component: PokemonsRawComponent, canActivate: [AuthGuardService]},

  // Login
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  // Por defecto lo mandamos a pokemons
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //Introducimos el modulo padre de cada uno para que luego el padre se ocupe de reedirigir a los hijos
  { path: 'pokemons', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule) },


  { path: 'studio', loadChildren: () => import('./studio-ghibli/studio-ghibli.module').then(m => m.StudioGhibliModule) },

  
  { path: 'ruta_modulo', loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule) },


  // Si no es válida, también lo mandamos a pokemons (o a 404)
 { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
