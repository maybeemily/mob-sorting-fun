import './html-equal.js';
import makePokemonCard from '../src/pokemon-template.js';

const test = QUnit.test;



test('template literal will appear same as static html', assert => {
    //arrange
    const pokemon = {
        'pokemon': 'bulbasaur',
        'attack': 49,
        'defense': 49,
        'hp': 45,
        'color_1': '#78C850',
        'color_2': '#A040A0',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    };

    //act
    const dom = makePokemonCard(pokemon);

    //assert
    assert.htmlEqual(dom, `
    <li>
        <h2>bulbasaur</h2>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png">
        <p>
            <span>HP: 45</span> <span>A: 49</span> <span>D: 49</span>
        </p>
    </li>
    `);
});