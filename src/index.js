import data from '../data/pokedex.js';
import loadPokemon from './load-pokemon.js';

const shortList = data.slice(0, 3);

loadPokemon(shortList);

