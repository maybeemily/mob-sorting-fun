import data from '../data/pokedex.js';
import loadPokemon from './load-pokemon.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';

//const shortList = data.slice(0, 3);

loadPokemon(data);

loadPaging(data.length, pagingOptions => {
    const pagedPokedex = pageArray(data, pagingOptions);
    loadPokemon(pagedPokedex);
});