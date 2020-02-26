import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudioGhibliRoutingModule } from './studio-ghibli-routing.module';
import { StudioGhibliComponent } from './studio-ghibli.component';
import { StudioGhibliListaComponent } from './studio-ghibli-lista/studio-ghibli-lista.component';
///
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from '../app-routing.module';

import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';

import {MatStepperModule} from '@angular/material/stepper';
import { StudioGhibliEditComponent } from './studio-ghibli-edit/studio-ghibli-edit.component';
import { StudioGhibliNewComponent } from './studio-ghibli-new/studio-ghibli-new.component';
import { StudioGhibliDetailsComponent } from './studio-ghibli-details/studio-ghibli-details.component';
import { ScorePipe } from './shared/pipes/score.pipe';
import { ScoreDirective } from './shared/directives/score.directive';

@NgModule({
  declarations: [StudioGhibliComponent, StudioGhibliListaComponent, StudioGhibliEditComponent, StudioGhibliNewComponent, StudioGhibliDetailsComponent, ScorePipe, ScoreDirective],
  imports: [
    CommonModule,
    StudioGhibliRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatStepperModule,
    //AppRoutingModule,
    MatTreeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule
  ]
})
export class StudioGhibliModule { }
