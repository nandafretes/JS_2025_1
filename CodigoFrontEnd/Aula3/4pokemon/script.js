document.getElementById("buscar-btn").addEventListener("click", () => {
    let nomeOuNumero = document.getElementById("pokemon-input").value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${nomeOuNumero}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon não encontrado!");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("pokemon-nome").innerText = `#${data.id} - ${data.name.toUpperCase()}`;
            document.getElementById("pokemon-img").src = data.sprites.front_default;
            document.getElementById("pokemon-tipo").innerText = "Tipo: " + data.types.map(t => t.type.name).join(", ");
        })
        .catch(error => {
            alert(error.message);
        });
});
