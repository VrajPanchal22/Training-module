// global variables

let list = [];
let mainObj = {};

let pageNo = getSessionStorageData("pageNo", 1)
let pageLimit = 6

let limit = 20
let offset = (limit * (pageNo - 1)) + 1

let loading = undefined;

let count = getSessionStorageData("count", 0) 
let endPageNo = Math.ceil(count / limit);



// -------------------------------main function-------------------------

async function main() {
    list = getSessionStorageData("pokemons", [])

    try {

        loadingStart();


        if (checkExist()) {

            showButtons();
            loadingEnd();
            loadPageNo()

            loadPokemons(list.slice(offset, offset + limit))
            return
        }

        mainObj = await getPokemons()
        // mainObj = callEnd;
        console.log("mainObj = ", mainObj);
        console.log("offset = ", offset);

        // update count
        count = mainObj.count;
        endPageNo = Math.ceil(count / limit)
        
        sessionStorage.setItem("count", mainObj.count)

        loadPageNo()


        // set prev and next visible or not
        showButtons();


        // get all pokemons one by one
        const responce = await Promise.all(mainObj.results.map(async (element) => {

            const pokemon = await getPokemon(element.url)
            
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

        sessionStorage.setItem("pokemons", JSON.stringify(list))

        // load pokemons
        loadingEnd()
        loadPokemons(responce)

    }
    catch (err) {
        console.log("Error = ", err);
    }
}

main()


async function getPokemons() {

    try {
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset - 1}&limit=${limit}`)
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
}




function checkExist() {
    for (let i = offset; i < offset + limit; i++) {
        // console.log("data[", i, "] = ", list[i]);

        if (!list[i]) {
            return false
        }
    }

    return true;
}


// ----------------------buttons------------------------------

function showButtons() {
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");

    if (pageNo == 1) {
        prevButton.classList.add("button--invisible")
    }
    else {
        prevButton.classList.remove("button--invisible")
    }

    if (pageNo == endPageNo) {
        nextButton.classList.add("button--invisible")
    }
    else {
        nextButton.classList.remove("button--invisible")
    }

}



function nextClicked() {
    offset += limit
    pageNo += 1

    sessionStorage.setItem("pageNo", "" + pageNo)
    main();
    loadPageNo()
}

function prevClicked() {
    offset -= limit
    pageNo -= 1

    sessionStorage.setItem("pageNo", "" + pageNo)
    main();
    loadPageNo()
}



// ---------------------------pagging-----------------------------

function loadPageNo() {

    pageObj = document.getElementById("pages")

    pageObj.innerHTML = ""

    let start = (pageNo <= 3) ? 1 : pageNo - 2;
    let end = (pageNo >= endPageNo - 3) ? endPageNo : pageNo + pageLimit - 2

    for (let i = start; i <= end; i++) {

        pageObj.innerHTML += `
            <span class="pages__num ${i == pageNo ? "pages__num--selected" : ""}" id="${i}">
                ${(i != 1 && i == pageNo - 2) ? ". . ." : ""}  ${i}  ${i == (pageNo + pageLimit - 2) ? ". . ." : ""}
            </span>
        `
    }

}

document.getElementById("pages").addEventListener("click", (event) => {

    if (event.target.id != "pages") {

        // console.log(event.target.id);
        let id = parseInt(event.target.id)

        offset = (limit * id) - limit + 1
        // console.log("offset = ", offset);

        pageNo = id
        console.log("Page no = ", pageNo);

        sessionStorage.setItem("pageNo", "" + pageNo)

        loadPageNo()
        main()

    }
})




// -----------------------loading----------------------------------

function loadingStart() {
    const load = document.getElementById("loaders")
    let i = 0;
    
    let length = load.children.length

    loading = setInterval(() => {
        for (let index = 0; index < length; index++) {
            
            if (index == i) {
                load.children[index].classList.add("loader--size")
            }
            else {
                load.children[index].classList.remove("loader--size")
            }
        }

        i = (i + 1) % length;

    }, 100);

    document.getElementById("pokemons").style.display = 'none'
    document.getElementById("loaders").style.display = 'flex'
}


function loadingEnd() {
    // setTimeout(() => {
    clearInterval(loading)
    document.getElementById("pokemons").style.display = 'grid'
    document.getElementById("loaders").style.display = 'none'
    // }, 1000);
}




// ------------------general functions-------------------------

function getSessionStorageData(key, defaultValue = "") {
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : defaultValue
}
