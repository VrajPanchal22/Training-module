id=window.location.search
console.log(id)
newid=id.slice(4,6)
console.log(newid)

const pokemonget=JSON.parse(sessionStorage.getItem(""+newid))
console.log(pokemonget)
//main imgUrl = "http://192.168.29.118:3004/images/pokemon/other/home/" //3.png"
imgsrc=`http://192.168.29.118:3004/images/pokemon/other/home/${newid}.png`
console.log(imgsrc)
document.getElementById("container").innerHTML += `
<div class="img">
<img class="pokemon_Img" src="${imgsrc}" alt="pokemon"
</div>
<div class="info">
<p>Id  :  ${pokemonget.id}</p>
<p>Name  :  ${pokemonget.name}</p>
<p>height  :  ${pokemonget.height}</p>
<p>weight  :  ${pokemonget.weight}</p>
<p>Abilities  :  ${pokemonget.abilities[0].ability.name}</p>
</div>
</a>
`


