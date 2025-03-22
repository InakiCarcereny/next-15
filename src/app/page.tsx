import { Suspense } from 'react';
import { PokemonList } from './components/PokemonList';
import { getPokemons } from './services/pokemons';

export default function Home() {
  const pokemons = getPokemons();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PokemonList pokemons={pokemons} />
    </Suspense>
  );
}
