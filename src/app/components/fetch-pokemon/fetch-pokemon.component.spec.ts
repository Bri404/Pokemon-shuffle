import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPokemonComponent } from './fetch-pokemon.component';

describe('FetchPokemonComponent', () => {
  let component: FetchPokemonComponent;
  let fixture: ComponentFixture<FetchPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
