<script>
	import { each } from 'svelte/internal';
	import { pokemones } from '../services/pokeapi.js';
	const pokemonNombre = 'pikachu';
	const pokemonesPromise = pokemones(pokemonNombre);
</script>

<div>
	{#await pokemonesPromise then pokemon}
		<h1>Nombre: {pokemon.nombrePokemon}</h1>
		<h2>Orden: {pokemon.order}</h2>

		<div>
			<h3>Normal</h3>
			<img src={pokemon.sprites.front_default} alt="Pokemon default front" />
			<img src={pokemon.sprites.back_default} alt="Pokemon default back" />
		</div>

		<div>
			<h3>Shiny</h3>
			<img src={pokemon.sprites.front_shiny} alt="Pokemon default front" />
			<img src={pokemon.sprites.back_shiny} alt="Pokemon default back" />
		</div>

		<div>
			<h3>Hembra</h3>
			<img src={pokemon.sprites.front_female} alt="Pokemon default front" />
			<img src={pokemon.sprites.back_female} alt="Pokemon default back" />
		</div>

		<div>
			<h3>Hembra Shiny</h3>
			<img src={pokemon.sprites.front_shiny_female} alt="Pokemon default front" />
			<img src={pokemon.sprites.back_shiny_female} alt="Pokemon default back" />
		</div>

		<table>
			<thead>
				<tr>
					<td>Base</td>
					<td>Esfuerzo</td>
				</tr>
			</thead>
			<tbody>
				{#each pokemon.stats as stat}
					<tr>
						<td>{stat.base_stat}</td>
						<td>{stat.effort}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/await}
</div>
