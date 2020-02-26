import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PokemonsComponent } from './pokemons.component';
import { PokemonsDetailsComponent } from './pokemons-details/pokemons-details.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsEditComponent } from './pokemons-edit/pokemons-edit.component';
import { PokemonsNewComponent } from './pokemons-new/pokemons-new.component';
// Material
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { VidaPipe } from './shared/pipes/vida.pipe';
import { ResaltaVidaDirective } from './shared/directives/resalta-vida.directive';
import { PokemonsRawComponent } from './pokemons-raw/pokemons-raw.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [PokemonsComponent, PokemonsDetailsComponent, PokemonsListComponent,
     PokemonsEditComponent, PokemonsNewComponent, VidaPipe, ResaltaVidaDirective, PokemonsRawComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    PokemonsComponent
  ]
})
export class PokemonsModule { }
