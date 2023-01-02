let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
// const imgUrl = "http://192.168.29.118:3004/images/pokemon/other/home/" //3.png" 

pageNum=1
async function main() {
    try {
        const callEnd = await getPokemons()
        Promise.all(callEnd.results.map(async (element) => {    
            const pokemon = await getPokemon(element.url)
            return pokemon
        }))
 
        .then(response => {
            console.log("res from then: ", response)
            response.forEach((ele)=> {
                loadPokemon(ele)
            })
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
        // console.log("Main URL: ",jsonRes)
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
            <div class="pokemon__name">${pokemon.name}</div>
        </a>
    `
}

let ul = document.querySelector('ul');
let allPages = 1154;
paging(allPages, sessionStorage.getItem("PageNum") ? JSON.parse(sessionStorage.getItem("PageNum")) : 1);
function paging(allPages, page){
    sessionStorage.clear()
    let li = '';
    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;
    console.log("Page:",page)
    pageNum = page;
    document.getElementById("pokemons").innerHTML = ''
    main()

    if(page > 1){
        li += `<li class="btn" onclick="paging(allPages, ${page-1})"> < </i></li>`;
        sessionStorage.setItem("PageNum", "" + page)
    }
    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){
        if(pageLength > allPages){
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
    if(page < allPages){
        li += `<li class="btn" onclick="paging(allPages, ${page+1})" > > </i></li>`;
        sessionStorage.setItem("PageNum", "" + page)
    }
    ul.innerHTML = li;
}



