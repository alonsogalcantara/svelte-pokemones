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

    console.log({ data });

    const {
        name,
        order,
        stats,
        sprites
    } = data;

    return {
        nombrePokemon: name,
        order,
        stats,
        sprites
    };
}