import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { NotificationsService } from '../core/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Nuestra página de inicio
  myIndex: string = '/pokemons';

  constructor(
    private _authService: AuthService,
    private _notificationsService: NotificationsService,
    private _router: Router

  ) { }

  ngOnInit(): void {
  }

loginUserPass(user: string, pass: string): void {
  if (!this._authService.checkUserPass(user, pass)) {
    alert('Error de validación');
    this._notificationsService.add('El usuario ' + user + ' NO se validó');
  }
  else {
    // VALIDACIÓN
    this._notificationsService.add('El usuario ' + user + ' se validó');

    // El usuario está validado, lo mandamos a nuestro inicio
    this._router.navigate([this.myIndex]);
  
  }

}

}
