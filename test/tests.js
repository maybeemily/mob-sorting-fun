import './html-equal.js';

const test = QUnit.test;

function makePokemonCard(pokemon) {
    const html = `
    <li>
        <h2>${pokemon.pokemon}</h2>
        <img src="${pokemon.url_image}">
        <p>
            <span>HP: ${pokemon.hp}</span> <span>A: ${pokemon.attack}</span> <span>D: ${pokemon.defense}</span>
        </p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('template literal will appear same as static html', assert => {
    //arrange
    const pokemon = {
        'pokemon': 'bulbasaur',
        'attack': 49,
        'defense': 49,
        'hp': 45,
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