import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-pokemons-new',
  templateUrl: './pokemons-new.component.html',
  styleUrls: ['./pokemons-new.component.scss']
})
export class PokemonsNewComponent implements OnInit {

  @Output() newPok = new EventEmitter();
  newPokForm: FormGroup = this.newFormGroup();
  constructor() { }

  ngOnInit() {
  }

  newFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl('0', Validators.required),
      name: new FormControl('', Validators.required),
      //level: new FormControl({value: '10', disabled: true}, Validators.required),
      level: new FormControl('10', Validators.required),
      hp: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    // Aquí puedo comprobar que todo es correcto
    this.newPok.emit(this.newPokForm.value);
    this.newPokForm = this.newFormGroup();
  }
}
