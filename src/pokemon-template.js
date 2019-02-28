export default function makePokemonCard(pokemon) {
    const html = `
    <li style="background-color:${pokemon.color_1}">
        <h2>${pokemon.pokemon} <span class="type_2" style="background:${pokemon.color_2}"></span></h2>
        <img src="${pokemon.url_image}">
        <p class="bold">
            <span>HP: ${pokemon.hp}</span> <span>A: ${pokemon.attack}</span> <span>D: ${pokemon.defense}</span>
        </p>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}