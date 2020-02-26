import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsNewComponent } from './pokemons-new.component';

describe('PokemonsNewComponent', () => {
  let component: PokemonsNewComponent;
  let fixture: ComponentFixture<PokemonsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
