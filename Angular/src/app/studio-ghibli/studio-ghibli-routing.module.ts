import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';
import { StudioGhibliComponent } from './studio-ghibli.component';

const routes: Routes = [{ path: '', component: StudioGhibliComponent ,canActivate: [AuthGuardService]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioGhibliRoutingModule { }
