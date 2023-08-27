const button = document.querySelector("button");
const baseUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";
const card = document.querySelector("#card-pokemon");
const idPokemon = document.querySelector("#id-pokemon");
const imgPokemon = document.querySelector("#img-pokemon");
const namePokemon = document.querySelector("#name-pokemon");
const typesPokemon = document.querySelector("#types-pokemon");
const abilitiesPokemon = document.querySelector("#abilities-pokemon");

button.addEventListener("click", async () => {
  try {
    const response = await fetch(baseUrl);
    const { abilities, id, name, types } = await response.json();
    card.classList.remove("hidden");
    idPokemon.textContent = id;
    imgPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    imgPokemon.alt = name;
    namePokemon.textContent = name;
    typesPokemon.textContent = types.map((type) => type.type.name);
    abilitiesPokemon.textContent = abilities.map(
      (ability) => " " + ability.ability.name
    );
  } catch (error) {
    console.log(error);
  }
});
