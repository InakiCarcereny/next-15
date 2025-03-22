import { Pokemons } from '@/app/types/pokemons';

//No es la mejor manera ya que en un server component se esta manejando logica y UI

export async function FetchPokemons() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const response = await data.json();

  const pokemons = response.results as Pokemons;

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
