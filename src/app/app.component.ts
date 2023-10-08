import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  selectActivePokemons,
  selectPokemons,
} from './state/selectors/pokemon.selector';
import { Pokemon } from './models/pokemon';
import { PokemonState } from './models/pokemon.state';
import { Observable } from 'rxjs';

enum ListMode {
  all = 'all',
  active = 'active',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pokemon';
  pokemons$: Observable<Pokemon[]>;
  listMode: ListMode = ListMode.all;

  constructor(private store: Store<PokemonState>) {
    this.pokemons$ = this.store.pipe(select(selectPokemons));
  }

  showAllPokemons() {
    this.pokemons$ = this.store.pipe(select(selectPokemons));
    this.listMode = ListMode.all;
  }

  showActivePokemons() {
    this.pokemons$ = this.store.pipe(select(selectActivePokemons));
    this.listMode = ListMode.active;
  }
}
