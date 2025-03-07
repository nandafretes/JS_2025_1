const container = document.getElementById("pokemon-container");

function carregarPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(data => {
            data.results.forEach((pokemon, index) => {
                let id = index + 1;
                let pokemonCard = document.createElement("div");
                pokemonCard.classList.add("pokemon-card");

                pokemonCard.innerHTML = `
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${pokemon.name}">
                    <p>#${id} - ${pokemon.name.toUpperCase()}</p>
                `;

                container.appendChild(pokemonCard);
            });
        })
        .catch(error => console.log("Erro ao carregar Pokémons:", error));
}

carregarPokemons();