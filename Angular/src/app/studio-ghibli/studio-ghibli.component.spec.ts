import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioGhibliComponent } from './studio-ghibli.component';

describe('StudioGhibliComponent', () => {
  let component: StudioGhibliComponent;
  let fixture: ComponentFixture<StudioGhibliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioGhibliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioGhibliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
