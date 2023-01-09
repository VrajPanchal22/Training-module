
let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
loader=document.querySelector(".loader")
pageNum=1;

//main()
//main function.
async function main() {
    try {
        // loadingStart()
        const callEnd = await getPokemons()
        limit = 20
        count = callEnd.count
        sessionStorage.setItem("count", "" + count)
        sessionStorage.setItem("limit", "" + limit)
        Promise.all(callEnd.results.map(async (element) => {
            const pokemon = await getPokemon(element.url)
            return pokemon
        }))
        .then(responce => {
            console.log("response from then = ", responce);

            responce.forEach(ele=>{
                showPokemon(ele)
            })
            // loadingEnd()
        })
     }
    catch(err) {
        console.log("Error = ", err);
     }
}
async function getPokemons() {
    sessionStorage.clear()
    try {
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(pageNum-1) * 20}&limit=20`)
        const jsonRes = await responce.json();
        // console.log("json = ", jsonRes);
        // console.log("Data = ", jsonRes.results);
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
        console.log("Pokemon = ", jsonPokemon.id);
        return jsonPokemon;
    }
     catch (err) {
        console.log("Error = ", err);
     }
}
function showPokemon(pokemon) {
    // let imageUrl = imgUrl + pokemon.id + ".png"
    let id = pokemon.id   
    sessionStorage.setItem(""+id,JSON.stringify(pokemon))
    pokemon.sprites.front_default = `http://192.168.29.118:3004/images/pokemon/other/home/${id}.png`
    document.getElementById("pokemons").innerHTML += `
        <a class="pokemon" id="${id}" href="api2.html?id=${id}">
        <div class="pokemon__id">${id}</div>
        <div class="pokemon__name">${(pokemon.name)}</div>
        <img class="pokemon_Img" src="${pokemon.sprites.front_default}"
        
        </a>
    `
}



let ul =document.querySelector('ul')
//let allpages=20;
function elem(allpages,page){
    sessionStorage.clear();
    let li='';

    let beforepages=page-1
    let afterpages=page+1
    let liactive;
    console.log("page:",page)
    //for increasing the page no  
    pageNum=page;
     document.getElementById("pokemons").innerHTML=''
     main()
     if(page > 2){
        li += `<li class="btn" onclick="elem(allpages,1)"> 1 </i></li>`;
        sessionStorage.setItem("PageNum", "" + page)
    }
     if(page > 1){
        li+=`<li class="btn" onclick="elem(allpages,${page-1})">&laquo;</li>`
        sessionStorage.setItem("PageNum", "" + page)
    }
    for(let pagelength=beforepages;pagelength <= afterpages;pagelength++){
        if(pagelength > allpages){
            continue;
        }
        if(pagelength == 0){
            pagelength = pagelength + 1;
        }
        if(page==pagelength)
        {
            liactive='active';
        }
        else{
            liactive='';
        }
        console.log("pl",pagelength)
        li +=`<li class="num ${liactive} onclick="elem(allpages, ${pagelength})"><span>${pagelength}</span></li>`
        sessionStorage.setItem("PageNum", "" + page)
    }

    if(page<allpages){
        li +=`<li class="btn" onclick="elem(allpages, ${page+1})">&raquo;</li>`
        sessionStorage.setItem("PageNum", "" + page)
    }
    if(page < allpages-1){
        li += `<li class="btn" onclick="elem(allpages, ${allpages})" > ${allpages}  </i></li>`;
        sessionStorage.setItem("PageNum", "" + page)
    }
    ul.innerHTML=li;
}
//elem(allpages,2)
count = 1154;
limit = 20;
let allpages = Math.ceil(count/limit);
page = sessionStorage.getItem("PageNum") ? JSON.parse(sessionStorage.getItem("PageNum")) : 1
elem(allpages, page);

// Loader
function loadingStart() {
    document.querySelector(".main").style.display = 'none'
    document.querySelector(".loader").style.display = 'flex'
}
function loadingEnd() {
    document.querySelector(".main").style.display = 'grid'
    document.querySelector(".loader").style.display = 'none'
}


//  page1.addEventListener("click", () => {
//     pokemons.innerHTML="";
//     url=`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
    
//    main();
// })
// page2.addEventListener("click", () => {
//     pokemons.innerHTML="";
//     url=`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`
    
//    main();
// })
// page3.addEventListener("click", () => {
//     pokemons.innerHTML="";
//     url=`https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20`
    
//    main(); 
// })




