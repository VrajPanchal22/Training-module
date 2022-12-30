// const imgUrl = "http://192.168.29.118:3004/images/pokemon/other/home/" //3.png"

let list = [];
let mainObj = {};
// let offset = sessionStorage.getItem("offset") ? parseInt(sessionStorage.getItem("offset")) : 1;
let offset = 1;

main()
async function main() {
    list = sessionStorage.getItem("pokemons") ? JSON.parse(sessionStorage.getItem("pokemons")) : [];

    try {

        if (checkExist()) {
            console.log("hello");
            console.log("data = ", list.slice(offset, offset+20));

            // set prev and next visible or not
            showButtons();

            loadPokemons(list.slice(offset, offset + 20))
            
            return
        }

        mainObj = await getPokemons()
        // mainObj = callEnd;
        console.log("mainObj = ", mainObj);
        console.log("offset = ", offset);


        // set prev and next visible or not
        showButtons();


        // get all pokemons one by one
        Promise.all(mainObj.results.map(async (element) => {
            const pokemon = await getPokemon(element.url)
            // console.log("p = ", pokemon);

            const pokemonObj = {
                id: pokemon.id,
                name: pokemon.name,
                imageUrl: `http://192.168.29.118:3004/images/pokemon/other/home/${pokemon.id}.png`,
                height: pokemon.height,
                weight: pokemon.weight,
                ability: pokemon.abilities
            }
            console.log(pokemonObj);

            list[pokemon.id] = pokemonObj

            return pokemonObj;
        }))
            .then(res => {
                // console.log("list = ", list);
                console.log("res = ", res);

                sessionStorage.setItem("pokemons", JSON.stringify(list))

                // load pokemons
                loadPokemons(res)
            })

    }
    catch (err) {
        console.log("Error = ", err);
    }
}



async function getPokemons() {

    // to save sessionStorage full
    // sessionStorage.clear()

    try {
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset-1}&limit=20`)
        // console.log("res = ", responce);

        const jsonRes = await responce.json();

        return jsonRes
    }
    catch (err) {
        console.log("Error = ", err);
    }

}




async function getPokemon(url) {

    try {
        const pokemon = await fetch(url)
        // console.log("pokemon = ", pokemon);

        const jsonPokemon = await pokemon.json();
        // console.log("Pokemon = ", jsonPokemon.id);

        return jsonPokemon;
    }
    catch (err) {
        console.log("Error = ", err.message);
    }

}



function loadPokemons(pokemons) {

    element = document.getElementById("pokemons");
    element.innerHTML = ""

    pokemons.forEach(pokemon => {
        element.innerHTML += `
        <a class="pokemon" id="${pokemon.id}" href="/JayPatel/Pokemon/pokemon.html?id=${pokemon.id}">
            <img class="pokemon__image" src="${pokemon.imageUrl}"
                alt="pokemon">
            <div class="pokemon__id">#${pokemon.id}</div>
            <div class="pokemon__name">${pokemon.name}</div>
        </a>
    `
    });
    // document.getElementById("pokemons").innerHTML += 
}




function checkExist() {
    for (let i = offset; i < offset + 20; i++) {
        // console.log("data = ", list[i]);

        if (!list[i]) {
            return false
        }
    }

    return true;
}


// ----------------------buttons------------------------------

function showButtons() {
    let button = document.getElementById("buttons");

    if (offset == 1) {
        button.children[0].classList.add("button--invisible")
    }
    else {
        button.children[0].classList.remove("button--invisible")
    }

}

document.getElementById("buttons").addEventListener("click", (event) => {

    if (event.target.id != "buttons") {
        console.log(event.target);
        let text = event.target.innerText;

        if (text == "next >") {
            console.log("next");
            offset += 20
            sessionStorage.setItem("offset", "" + offset)
            main();
        }
        else {
            console.log("prev");
            offset -= 20
            sessionStorage.setItem("offset", "" + offset)
            main();
        }
    }
})