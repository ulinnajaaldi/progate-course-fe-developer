const button = document.querySelector("button");
const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=36";
const generateResult = document.querySelector("#result");

button.addEventListener("click", async () => {
  try {
    const response = await fetch(baseUrl);
    const { results } = await response.json();
    const promises = results.map(async (result) => {
      const { url } = result;

      try {
        const responseDetail = await fetch(url);
        const { id, name, types } = await responseDetail.json();
        const color = types[0].type.name;

        const card = document.createElement("div");
        card.innerHTML = `
          <div
            class='h-[320px] rounded-lg p-5 shadow-xl relative border-2 bg-${color} border-${color}Border'
            id="${id}"
          >
            <p
              class="absolute top-0 left-0 p-3 rounded-tl-lg rounded-br-lg font-semibold text-slate-200 text-xl bg-${color}Border"
            >
              ${id}
            </p>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"
              alt="${name}"
              class="w-[200px] h-[200px] mx-auto"
            />
            <h1
              class="text-center text-2xl font-bold capitalize"
            >${name}</h1>
            <p class="font-semibold text-center mt-2">
              Type: 
              ${types
                .map((type) => {
                  return `<span class="bg-${type.type.name}Border rounded-md text-sm shadow-md mr-1 p-1">${type.type.name}</span>`;
                })
                .join("")}
            </p>
          </div>
        `;
        return card;
      } catch (error) {
        console.log(error);
      }
    });

    const cards = await Promise.all(promises);
    cards.forEach((card) => generateResult.appendChild(card));
  } catch (error) {
    console.log(error);
  }
});
