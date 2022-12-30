id = window.location.search
// console.log(id)

newid = id.slice(4,6)
console.log(newid)

const pokemone = JSON.parse(sessionStorage.getItem("" + newid))
// console.log(pokemone.name, pokemone.height)
//     console.log(pokemone)   

imgSrc = `http://192.168.29.118:3004/images/pokemon/other/home/${newid}.png`
console.log(imgSrc)

document.getElementById('container').innerHTML=`
<div class="img">
<img class="pokemon__image" src="${imgSrc}" alt="pokemon">
</div>
<div class="content">
 <p> Id: ${pokemone.id}</p>
<p> Name: ${pokemone.name}</p>
<p> Height: ${pokemone.height}</p>
<p> Wight: ${pokemone.weight}</p>
<p> Abilities: ${pokemone.abilities[0].ability.name}</p>
</div>
`





// document.getElementById("pokemons").innerText="hello"
// document.querySelector("pokemons").innerHTML = `
// <div>
// <img class="pokemon__image" src="${imgSrc}" alt="pokemon">
// </div>
// `





