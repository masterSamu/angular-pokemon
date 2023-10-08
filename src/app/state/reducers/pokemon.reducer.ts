import { createReducer, on } from '@ngrx/store';
import { getPokemons } from '../actions/pokemon.actions';
import { PokemonState } from 'src/app/models/pokemon.state';

export const initialState: PokemonState = {
  pokemons: [
    { name: 'Mewtwo', active: true },
    { name: 'Pikachu', active: false },
  ],
  isLoading: false,
};

export const pokemonReducer = createReducer(initialState);
