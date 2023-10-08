import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/models/pokemon';

export const getPokemons = createAction('[Pokemons] Get');

export const createPokemon = createAction(
  '[Pokemons] Create',
  props<{ pokemon: Pokemon }>
);
