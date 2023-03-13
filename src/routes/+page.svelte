<script>
	import { pokemones } from '../services/pokeapi.js';

	let pokemone = {
		pokemonNombre: ''
	};

	let onChangepokemonNombre = '';
	let pokemonesPromise = pokemones();

	const onChange = () => {
		onChangepokemonNombre = pokemone.pokemonNombre;
		pokemonesPromise = pokemones(onChangepokemonNombre);
	};
</script>

<div>
	<select bind:value={pokemone.pokemonNombre} on:change={onChange} name="listPokemones">
		<option value="" selected>Elige una opcion...</option>
		<option value="ditto">Ditto</option>
		<option value="mew">Mew</option>
		<option value="pikachu">Pikachu</option>
		<option value="eevee">Eevee</option>
		<option value="umbreon ">Umbreon</option>
		<option value="espeon">Espeon</option>
		<option value="vaporeon">Vaporeon</option>
		<option value="bulbasaur">Bulbasaur</option>
		<option value="charmeleon">Charmeleon</option>
	</select>

	{#if onChangepokemonNombre === ''}
		<h1>Elige un pokemon</h1>
	{:else}
		{#await pokemonesPromise then pokemon}
			<h1>Nombre: {pokemon.nombrePokemon}</h1>
			<h2>Tipo de pokemon: {pokemon.tipoPokemon[0].type.name}</h2>

			<div>
				{#if pokemon.sprites.front_default !== null}
					<div>
						<h3>Normal</h3>
						<img src={pokemon.sprites.front_default} alt="Pokemon default front" />
						<img src={pokemon.sprites.back_default} alt="Pokemon default back" />
					</div>
				{/if}

				{#if pokemon.sprites.front_shiny !== null}
					<div>
						<h3>Shiny</h3>
						<img src={pokemon.sprites.front_shiny} alt="Pokemon shiny front" />
						<img src={pokemon.sprites.back_shiny} alt="Pokemon shiny back" />
					</div>
				{/if}

				{#if pokemon.sprites.front_female !== null}
					<div>
						<h3>Hembra</h3>
						<img src={pokemon.sprites.front_female} alt="Pokemon female front" />
						<img src={pokemon.sprites.back_female} alt="Pokemon female back" />
					</div>
				{/if}

				{#if pokemon.sprites.front_shiny_female !== null}
					<div>
						<h3>Hembra Shiny</h3>
						<img src={pokemon.sprites.front_shiny_female} alt="Pokemon shiny female front" />
						<img src={pokemon.sprites.back_shiny_female} alt="Pokemon shiny female back" />
					</div>
				{/if}
			</div>

			<table>
				<thead>
					<tr>
						<td>Tipo</td>
						<td>Base</td>
						<td>Esfuerzo</td>
					</tr>
				</thead>
				<tbody>
					{#each pokemon.stats as stat}
						<tr>
							<td>{stat.stat.name}</td>
							<td>{stat.base_stat}</td>
							<td>{stat.effort}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/await}
	{/if}
</div>
