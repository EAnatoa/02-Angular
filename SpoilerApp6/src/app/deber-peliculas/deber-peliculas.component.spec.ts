import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeberPeliculasComponent } from './deber-peliculas.component';

describe('DeberPeliculasComponent', () => {
  let component: DeberPeliculasComponent;
  let fixture: ComponentFixture<DeberPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeberPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeberPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
