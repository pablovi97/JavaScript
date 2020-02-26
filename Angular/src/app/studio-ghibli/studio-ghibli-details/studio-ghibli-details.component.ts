import { Component, OnInit ,Input } from '@angular/core';
import { StudioGhibli } from '../shared/models/studio-ghibli.model';
@Component({
  selector: 'app-studio-ghibli-details',
  templateUrl: './studio-ghibli-details.component.html',
  styleUrls: ['./studio-ghibli-details.component.scss']
})
export class StudioGhibliDetailsComponent implements OnInit {
  //Creamos un input donde se introduciran los datos
  @Input() stuInput: StudioGhibli;
  constructor() { }

  ngOnInit(): void {
  }

}
