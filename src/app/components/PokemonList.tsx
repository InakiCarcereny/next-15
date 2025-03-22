import { use } from 'react';
import { Pokemons } from '../types/pokemons';

export function PokemonList({ pokemons }: { pokemons: Promise<Pokemons> }) {
  const allPokemons = use(pokemons);

  return (
    <ul>
      {allPokemons.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
