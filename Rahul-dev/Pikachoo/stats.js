
var obj =JSON.parse(localStorage.getItem(1));
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const id = params.id;

document.getElementById('pimg').src = obj[id].url;
document.getElementById('name').innerHTML = obj[id].name;
document.getElementById('height').innerHTML = obj[id].height;
document.getElementById('weight').innerHTML = obj[id].weight;
document.getElementById('id').innerHTML = obj[id].id;



