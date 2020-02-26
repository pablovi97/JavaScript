import { Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _notificationsService: NotificationsService
  ) { }

  checkUserPass(user: string, pass: string): boolean {

    if (user.toLowerCase() === 'test' && pass === '1234') {
      sessionStorage.setItem('logged', 'OK!');
      this._notificationsService.add('Usuario ' + user + ' está loggeado!');
      return true;
    }
    sessionStorage.removeItem('logged');
    this._notificationsService.add('Usuario ' + user + ' NO está loggeado!');
    return false;
  }
}


