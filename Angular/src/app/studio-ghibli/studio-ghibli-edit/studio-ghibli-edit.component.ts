import { Component, OnInit, Input } from '@angular/core';
import { StudioGhibli } from '../shared/models/studio-ghibli.model';

@Component({
  selector: 'app-studio-ghibli-edit',
  templateUrl: './studio-ghibli-edit.component.html',
  styleUrls: ['./studio-ghibli-edit.component.scss']
})
export class StudioGhibliEditComponent implements OnInit {
  //Creamos un input donde se introduciran los datos
  @Input() stuEdit: StudioGhibli;
  constructor() { }

  ngOnInit(): void {
  }

}
