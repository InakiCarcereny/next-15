export async function getPokemons() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const response = await data.json();

  return response.results;
}
