let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
loader = document.querySelector('.loader')
pageNum=1


// Main Functions
async function main() {
    try {
    loadingStart()
        const callEnd = await getPokemons()
        limit = 20
        count = callEnd.count
        sessionStorage.setItem("count", "" + count)
        sessionStorage.setItem("limit", "" + limit)
        Promise.all(callEnd.results.map(async (element) => {    
            const pokemon = await getPokemon(element.url)
            return pokemon
        }))
 
        .then(response => {
            console.log("res from then: ", response)
            response.forEach((ele)=> {
                loadPokemon(ele)
            })
            loadingEnd()
        })

    }

    catch (err) {
        console.log("Error = ", err);
    }
}
async function getPokemons() {
    sessionStorage.clear()
    try {
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(pageNum-1) * 20}&limit=20`)
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
        const jsonPokemon = await pokemon.json();
        return jsonPokemon;
    }
    catch (err) {
        console.log("Error = ", err.message);
    }
}
function loadPokemon(pokemon) {
    let id = pokemon.id
    imgSrc = `http://192.168.29.118:3004/images/pokemon/other/home/${id}.png`
    sessionStorage.setItem("" + id, JSON.stringify(pokemon))
    document.getElementById("pokemons").innerHTML += 
    `
        <a class="pokemon" id="${id}"  href="pokemoneStats.html?id=${id}">
            <img class="pokemon__image" src="${imgSrc}"
                alt="Error">
            <div class="pokemon__id">#${id}</div>
            <div class="pokemon__name" style="text-transform:capitalize;">${(pokemon.name)}</div>
        </a>
    `
}

// Pagging
let ul = document.querySelector('ul');
function paging(totalPages, page){
    sessionStorage.clear()
    let li = '';
    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;
    console.log("Page:",page)
    pageNum = page;
    document.getElementById("pokemons").innerHTML = ''
    main()

    if(page > 2){
        li += `<li class="btn" onclick="paging(totalPages,1)"> 1 </i></li>`;
        sessionStorage.setItem("PageNum", "" + page)        
    }
    if(page > 1){
        li += `<li class="btn" onclick="paging(totalPages, ${page-1})"> < </i></li>`;
        sessionStorage.setItem("PageNum", "" + page)
    }
  
    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){
        if(pageLength > totalPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            liActive = 'active';
        }else{
            liActive = '';
        }
        li += `<li class="btn numb ${liActive}" ><span>${pageLength}</span></li>`
    }
    if(page < totalPages){
        li += `<li class="btn" onclick="paging(totalPages, ${page+1})" > > </i></li>`;
        sessionStorage.setItem("PageNum", "" + page)
    }
    if(page < totalPages-1){
        li += `<li class="btn" onclick="paging(totalPages, ${totalPages})" > ${totalPages}  </i></li>`;
        sessionStorage.setItem("PageNum", "" + page)
    }
    ul.innerHTML = li;
}


count = sessionStorage.getItem("count")
limit = sessionStorage.getItem("limit")
let totalPages = Math.ceil(count/limit);
page = sessionStorage.getItem("PageNum") ? JSON.parse(sessionStorage.getItem("PageNum")) : 1
paging(totalPages, page);


// Loader
function loadingStart() {
    document.querySelector(".main").style.display = 'none'
    document.querySelector(".loader").style.display = 'flex'
}

function loadingEnd() {
    document.querySelector(".main").style.display = 'grid'
    document.querySelector(".loader").style.display = 'none'
}

