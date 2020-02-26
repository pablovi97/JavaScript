import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-studio-ghibli-new',
  templateUrl: './studio-ghibli-new.component.html',
  styleUrls: ['./studio-ghibli-new.component.scss']
})
export class StudioGhibliNewComponent implements OnInit {
  @Output() newStu = new EventEmitter();
  newStuForm: FormGroup = this.newFormGroup();
  constructor() { }

  ngOnInit(): void {
  }
  newFormGroup(): FormGroup {
    return new FormGroup({
      id: new FormControl('0', Validators.required),
      title: new FormControl('', Validators.required),
      //level: new FormControl({value: '10', disabled: true}, Validators.required),
      description: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      producer: new FormControl('', Validators.required),
      release_date: new FormControl('', Validators.required),
      rt_score: new FormControl('', Validators.required),
    });
  }
  onSubmit(): void {
    // Aquí puedo comprobar que todo es correcto
    this.newStu.emit(this.newStuForm.value);
    this.newStuForm = this.newFormGroup();
  }

}
