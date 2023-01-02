id=window.location.search.slice(4);
console.log(id);

let data = JSON.parse(sessionStorage.getItem('maindata'))[id];
console.log(data);
printData(data);
function printData(data){
    container=document.getElementById('pokemon_details');
    container.innerHTML=`<div class="moreDetails">
    <h1 class="text-center my-5">${data.name}#${data.id}</h1>
    <div class="d-flex flex-row">
    <div class="img mx-5" >
        <img style="background-color:rgb(225, 215, 215)" class="rounded-5  " src="${data.pokemonImg}" alt="">
    </div>
    <div class="w-50 details bg-primary rounded-5 d-flex justify-content-center flex-column align-items-center">
        <h2>height:</h2>
        <div class="fs-1">${data.height}</div>
        <h2>weight:</h2>
        <div class="fs-1">${data.weight}</div>
    </div>
    </div>
</div>`
}


