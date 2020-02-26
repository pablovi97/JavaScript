import { Component, OnInit, OnDestroy } from '@angular/core';
import { STUDIOGHIBLI} from '../shared/mocks/studio-ghibli.mocks';
import { StudioGhibli } from '../shared/models/studio-ghibli.model';
import { NotificationsService } from 'src/app/core/notifications.service';
import { StudioGhibliApiService } from '../shared/services/studio-ghibli-api-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studio-ghibli-lista',
  templateUrl: './studio-ghibli-lista.component.html',
  styleUrls: ['./studio-ghibli-lista.component.scss']
})
export class StudioGhibliListaComponent implements OnInit {

  studioghibli: StudioGhibli[] /*=STUDIOGHIBLI*/;
  selectedStudio: StudioGhibli | null = null;
  editStudio: StudioGhibli | null = null;
  subscription: Subscription;
  constructor(  private _notificationsService: NotificationsService,
    private _StudioGhibliApiService: StudioGhibliApiService) { }
  private log(notif: string): void {
    this._notificationsService.add('studio: ' + notif);
  }
  ngOnInit(): void {
    //Introducimos el metodo de cojer el array de la api como primero en iniciarse
    this.log('Cogiendo lista studio...');
    this.getListaStu();
  }
  onSelect(stu: StudioGhibli): void {
    //Metodo àra seleccionar una pelicula
    this.log('Selecciono la pelicula...' + stu.title);
    this.selectedStudio = stu;
    this.editStudio = null;
  }
  onEdit(stu: StudioGhibli): void {
    //Metodo para editar una pelicula
    this.selectedStudio = stu;
    this.editStudio = stu;
  }
  getListaStu(): void {
    //Cojemos el array de la api de StudiGhibli y la metemos en un array nuestro
    const scope = this;
    scope.subscription = scope._StudioGhibliApiService.getSTUObserv().subscribe(
      {
        next(stuObserv) { scope.studioghibli = stuObserv; }
      }
    );
  }
  onAdd(stu: StudioGhibli) {
    if (stu) {
      //Verificamos si tiene un id o titulo repetido antes de añadirlo
      for (const val of this.studioghibli) {
        if (val.id == stu.id ) {
          this.log('No se puede añadir una pelicula con un id creado...');
          return;
        }else if(val.title == stu.title){
          this.log('No se puede añadir una pelicula con titulo creado...');
          return;
        }
      }
      this.log('Añado la pelicula...' + stu.title);
      this.studioghibli.push(stu);
    } else {
      alert('Se ha recibido un pokemon vacío');
    }
  }

  onDelete(stu: StudioGhibli): void {
    //Metodo para borrar el objeto del array de las peliculas
    if (confirm('¿Realmente quiere eliminar la pelicula' + stu.title + '?')) {
      this.log('Borro la pelicula...' + stu.title);
      this.selectedStudio = null;
      this.editStudio = null;
      this.studioghibli = this.studioghibli.filter(p => p !== stu);
    }
  }

}
