import makePokemonCard from './pokemon-template.js';

const pokemonGallery = document.getElementById('pokemon-gallery');

function loadPokemon(pokemon) {
    pokemon.forEach(pokemon => {
        const dom = makePokemonCard(pokemon);
        pokemonGallery.appendChild(dom);
    });
}

export default loadPokemon;