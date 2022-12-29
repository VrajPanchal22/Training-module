const id = document.location.search.slice(4);
console.log("id = ", id);

const pokemonObj = JSON.parse(sessionStorage.getItem("pokemons"))[id];
console.log("data = ", pokemonObj);

console.log("data = ", document.getElementById("pokemon"));

document.getElementById("pokemon").innerHTML = `
    <h1 class="heading">${pokemonObj.name}</h1>

    <div class="mini-container" id="pokemon">
        <div class="pokemon__img">
            <img class="img" src="${pokemonObj.imageUrl}" alt="pokemon">
        </div>
        <div class="pokemon__properties">
            <div class="pokemon__property">
                <span class="property__name" >Height</span>
                <span class="property__value" >${pokemonObj.height}</span>
            </div>

            <div class="pokemon__property">
                <span class="property__name" >Weight</span>
                <span class="property__value" >${pokemonObj.weight}</span>
            </div>

            <div class="pokemon__property">
                <span class="property__name" >Ability</span>
                <span class="property__value" >${pokemonObj.ability[0].ability.name}</span>
            </div>
        </div>
    </div>
    `