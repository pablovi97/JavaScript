import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsRawComponent } from './pokemons-raw.component';

describe('PokemonsRawComponent', () => {
  let component: PokemonsRawComponent;
  let fixture: ComponentFixture<PokemonsRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsRawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
