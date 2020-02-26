import { Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private _notificationsService: NotificationsService,
    private _router: Router

  ) { }

  canActivate() {
    if (this.userAuthenticated()) {
      this._notificationsService.add('Usuario estaba autenticado');
      return true;
    }
    this._notificationsService.add('Usuario NO estaba autenticado');
    this._router.navigate(['/login']);
    return false;
  }

  private userAuthenticated(): boolean {
    // Los usuarios autenticados deberían tener una
    // variable de sesión logged con valor "OK!"
    const auth = sessionStorage.getItem('logged');
    return (auth && auth === 'OK!');

  }
}
