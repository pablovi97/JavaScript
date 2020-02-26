import { Injectable } from '@angular/core';
import { StudioGhibli } from '../models/studio-ghibli.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationsService } from 'src/app/core/notifications.service';

@Injectable({
    providedIn: 'root'
})


export class StudioGhibliApiService {


    private _studioApiUrl = 'https://ghibliapi.herokuapp.com/films/';
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private _http: HttpClient,
        private _notificationsService: NotificationsService) { }

    getSTUObserv(): Observable<StudioGhibli[]> {
        // Lo que voy a devolver
        console.log("entra en observ");
        const STU: StudioGhibli[] = [];
        const scope = this;
        const getUrl = this._studioApiUrl;


        scope._http.get(getUrl).subscribe((result: any) => {
            console.log(result);
            result.forEach((val: any) => {

                scope._http.get(val.url).subscribe((STUData: any) => {
             //Nos suscribimos a la api de studioGhibli y sacamos todos los datos

                    STU.push(new StudioGhibli(
                        STUData.id,
                        STUData.title,
                        STUData.description,
                        STUData.director,
                        STUData.producer,
                        STUData.release_date,
                        STUData.rt_score,
                    )
                    );

                });
            });
        });
//Devolvemos un array con los datos recogidos de la api
        return of(STU);
    }
}
