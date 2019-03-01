import makePokemonCard from './pokemon-template.js';

const pokemonGallery = document.getElementById('pokemon-gallery');

function loadPokemon(pokemon) {
    clearPokedex();

    pokemon.forEach(pokemon => {
        const dom = makePokemonCard(pokemon);
        pokemonGallery.appendChild(dom);
    });

    function clearPokedex() {
        while(pokemonGallery.children.length > 0) {
            pokemonGallery.lastElementChild.remove();
        }
    }
}

export default loadPokemon;