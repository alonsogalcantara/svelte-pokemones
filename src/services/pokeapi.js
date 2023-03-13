const FETCH_OPTIONS = {
    method: 'GET',
    redirect: 'follow'
};

export async function pokemones(pokemon = "ditto") {

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        // @ts-ignore
        FETCH_OPTIONS)
    const data = await response.json();

    const {
        name,
        forms,
        stats,
        sprites,
        types
    } = data;

    return {
        nombrePokemon: name,
        tipoPokemon: types,
        forms,
        stats,
        sprites
    };
}