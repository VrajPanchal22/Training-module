
id = window.location.search;

newid = id.slice(4)
//console.log(newid)

const pokemone = JSON.parse(sessionStorage.getItem("user"))
//console.log(pokemone[newid-1].name)

imgSrc = `http://192.168.29.118:3004/images/pokemon/other/home/${newid}.png`
//console.log(imgSrc)

document.getElementById('container').innerHTML=`
<div class="img" style="display: flex;
justify-content: center;">
<img class="pokemon__image" src="${imgSrc}" alt="pokemon">
</div>
<div class="content" style="display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: antiquewhite;
font-weight: bold;
font-size: 2rem;">
<p> Name: ${pokemone[newid].name}</p>
<p> Height: ${pokemone[newid].height}</p>
<p> Wight: ${pokemone[newid].weight}</p>
</div>
`

function goback(){
history.go(-1);
}