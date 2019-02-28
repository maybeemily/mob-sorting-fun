import data from '../data/pokedex.js';
import loadPokemon from './load-pokemon.js';
import loadPaging from './paging-component.js';

//const shortList = data.slice(0, 3);

loadPokemon(data);

loadPaging(data.length, pagingOptions => {
    console.log(pagingOptions);
});