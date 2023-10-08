import { PokemonState } from 'src/app/models/pokemon.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<PokemonState>('pokemons');

export const selectPokemons = createSelector(
  selectFeature,
  (state: PokemonState) => state.pokemons
);

export const selectActivePokemons = createSelector(
  selectFeature,
  (state: PokemonState) => state.pokemons.filter((pokemon) => pokemon.active)
);

export const selectLoading = (state: PokemonState) => state.isLoading;
