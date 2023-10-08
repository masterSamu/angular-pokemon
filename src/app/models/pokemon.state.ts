import { Pokemon } from './pokemon';

export interface PokemonState {
  pokemons: Pokemon[];
  isLoading: boolean;
}
