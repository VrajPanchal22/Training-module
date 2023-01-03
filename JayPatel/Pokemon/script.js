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
        <div class="d-flex col col-lg-3 col-md-4 col-sm-6 col-8 my-2">
            <a href="/JayPatel/Pokemon/pokemon.html?id=${pokemon.id}" class="card text-bg-light border-secondary pokemon">
                <img src="${pokemon.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">#${pokemon.id}</h5>
                    <p class="card-text">${pokemon.name}</p>
                </div>
            </a>
        </div>
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




// ---------------------------pagging-----------------------------

function showButtons() {
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");

    console.log("prev = ", prevButton);
    console.log("next = ", nextButton);

    if (pageNo == 1) {
        prevButton.classList.add("disabled")
    }
    else {
        prevButton.classList.remove("disabled")
    }

    if (pageNo == endPageNo) {
        nextButton.classList.add("disabled")
    }
    else {
        nextButton.classList.remove("disabled")
    }

}


function loadPageNo() {

    pageObj = document.getElementById("pages")

    console.log(pageObj);
    pageObj.innerHTML = ""

    let start = (pageNo <= 4) ? 1 : pageNo - 3;
    let end = (pageNo >= endPageNo - 4) ? endPageNo : pageNo + pageLimit - 3


    // prev
    pageObj.innerHTML += `
        <li class="page-item" >
            <a href="#" class="page-link" id="prev" onclick="prevClicked(this.id)" >
                <span>&laquo;</span>
            </a>
        </li>
    `

    // for ...
    if(start != 1) {
        pageObj.innerHTML += `
        <li class="page-item disabled" >
            <a href="#" class="page-link">...</a>
        </li>
        `
    }

    // page numbers
    for(let i = start ; i <= end ; i++) {
        pageObj.innerHTML += `
            <li class="page-item ${i == pageNo ? "active" : ""}" >
                <a href="#" class="page-link" id="${i}" onclick="pageClicked(this.id)" > ${i} </a>
            </li>
        `
    }

    // for ...
    if(end != endPageNo) {
        pageObj.innerHTML += `
        <li class="page-item disabled" >
            <a href="#" class="page-link">...</a>
        </li>
        `
    }

    // next
    pageObj.innerHTML += `
            <li class="page-item">
                <a href="#" class="page-link" id="next" onclick="nextClicked(this.id)">
                    <span>&raquo;</span>
                </a>
            </li>
    `

    // to disable prev or next
    showButtons()

}



function nextClicked() {
    offset += limit
    pageNo += 1

    sessionStorage.setItem("pageNo", "" + pageNo)

    loadPageNo()
    main();
}

function prevClicked() {
    offset -= limit
    pageNo -= 1

    sessionStorage.setItem("pageNo", "" + pageNo)

    loadPageNo()
    main();
}


function pageClicked(id) {
    id = parseInt(id)

    offset = (limit * (id - 1)) + 1
    pageNo = id

    sessionStorage.setItem("pageNo", "" + pageNo)

    loadPageNo()
    main()

}

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
        document.getElementById("pokemons").style.display = 'flex'
        document.getElementById("loaders").style.display = 'none'
    // }, 10000);
}




// ------------------general functions-------------------------

function getSessionStorageData(key, defaultValue = "") {
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : defaultValue
}
