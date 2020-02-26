import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _router: Router, private auth: AuthService) { }

  ngOnInit(): void {
//Quitamos del local storage la sesion del usuario
 localStorage.removeItem('logged');
 //lo mandamos al login (se deberia hacer mejor con un usuario con tokens )
 
 this._router.navigate(["/login"]);
  }

}
