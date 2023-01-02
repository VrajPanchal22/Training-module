var  preloader = document.getElementById('preLoader');
preloader.addEventListener('load',()=>{
    preloader.style.display="none";
})
var limit = 20;
let getoffset = sessionStorage.getItem('offset') ;
offset = getoffset == null ? 0 : parseInt(JSON.parse(getoffset)) ;
var idCount = 0;
function generateUrl(offset) {
    var url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`;
    setAndPrintData(url);
};


pageId(offset);
generateUrl(offset);
// set data into data base and call printCards function to print them
async function setAndPrintData(url) {
    console.log(url);
    let mainResponse = await fetch(url);
    if (!mainResponse.ok) {
        throw new Error(`HTTP error ! status : ${mainResponse.status}`);
    }
    let mainData = await mainResponse.json();
    setPokemonDataInSessionStroge(mainData);
}

//get data from session storage
function getData() {
    let pokemonString = sessionStorage.getItem('maindata');
    let pokemonObj = pokemonString == null ? [] : JSON.parse(pokemonString);// ifthere is no data create empty array otherwise parse array
    return pokemonObj;
}

//set data in to sessionStorage
function setData(key, pokemonObj) {
    sessionStorage.setItem(key, JSON.stringify(pokemonObj));
}

//fetch name , fetch url and get data of height, weidth and img url modify the img url and store it in sessionStorage
function setPokemonDataInSessionStroge(mainData) {
    var pokemonList = getData();
    let list3 = mainData.results.map((item, index) => {
        return new Promise((resolve, reject) => {
            let subResponse = fetch(item.url);
            subResponse.then(response => response.json()).then(subData => {
                let imgUrl = getImgUrl(subData);
                DataObject = {
                    id: subData.id,
                    name: item.name,
                    pokemonImg: imgUrl,
                    height: subData.height,
                    weight: subData.weight
                }
                pokemonList.push(DataObject);
                resolve(DataObject);
            });
        });
    });
    Promise.all(list3).then((value) => {
        setData('maindata', value);
    }).then(value => {
        printCardes();
    });

}

// take subdata use img url modify it .
function getImgUrl(subData) {
    let imgUrl = subData.sprites.other.home.front_default;
    var splitImgUrl = imgUrl.split('/');
    let modifiedUrl = 'http://192.168.29.118:3004/images/' + splitImgUrl[7] + '/' + splitImgUrl[8] + '/' + splitImgUrl[9] + '/' + splitImgUrl[10]
    return modifiedUrl;
}


//print cards on ui
function printCardes() {
    var pokemonList = getData();
    console.log(pokemonList);
    cardContainer = document.getElementById('cardsContainer');
    cardContainer.innerHTML = '';
    pokemonList.forEach((item, index) => {
        cardContainer.innerHTML += ` <div class="card col-lg-4 m-3" style="width: 18rem;">
          <a href="details.html?id=${index}"><img src="${item.pokemonImg}" class="card-img-top" alt="..."></a>
          <div class="card-body">
            <h4>#${item.id}</h4>
            <h5 class="pokemon-name">${item.name}</h5>
       
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`
    })

}
// for next and previous button
let btn = document.querySelectorAll('.page-link');
btn.forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.id == 'next-btn') {
            offset= offset;
            offset += limit;
            console.log(offset);
            pageId(offset);
        }
        if (element.id == 'prev-btn') {
            offset -= limit;
            pageId(offset);
        }
        if(element.id==1 || element.id==2 || element.id==3){
            pagenumber=parseInt(element.innerText) ;
            console.log(pagenumber);
            offset = (pagenumber * limit) - limit ; 
            console.log(offset)
        }
        sessionStorage.setItem('offset' , offset);
        generateUrl(offset);
    })
})
//count and display page number for pagination
function pageId(offset){
    id1 = document.getElementById('1');
    id1.innerHTML = (offset / limit) + 1;
    id2 = document.getElementById('2');
    id2.innerHTML = (offset / limit) + 2;
    id3 = document.getElementById('3');
    id3.innerHTML = (offset / limit) + 3;
}
