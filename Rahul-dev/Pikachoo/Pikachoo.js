let offset;
let counter = 0;
let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener('click',function(){
  counter = counter-20;
  run(`https://pokeapi.co/api/v2/pokemon?offset=${counter} &limit=20`,counter);

})
next.addEventListener('click',function(){
  counter = counter+20;
  run(`https://pokeapi.co/api/v2/pokemon?offset=${counter} &limit=20`,counter);
})
function createElement (){

  for(var i=0;i<20;i++){
  document.getElementById('maincontainer').innerHTML += '<div class="item">'+` <a  href="/Pikachoo/Stats.html?id=${i}">click</a>`+
  `<img src="" alt="" id="card${i+1}" class="itemclass" />`+
  `<span id="item${i+1}name"></span>`+'</div>';
  

  }

}
function createButtons(){
  let count = 1154;
  offset =0;
  let pagescount = Math.round(count/20)-1;
  for(var i=0;i<pagescount;i++){
    let x = document.querySelector('ul'); 
    x.innerHTML += `<li class='itembutton' id="${i+1}"  onclick="run('https://pokeapi.co/api/v2/pokemon?offset=${offset} &limit=20', ${offset});makeactive(${i+1});removeactive(${i+1})">${i+1}</li>`;
    localStorage.setItem(i+1,offset);
  
    offset=offset+20;
    
    
  }
}
function makeactive(x){
  document.getElementById(`${x}`).classList.add('current');
}
function removeactive(x){
  setTimeout( function(){document.getElementById(`${x}`).classList.remove('current')},2000);
}

// THIS IS STATIC CODE
function run(url, offset) {
  loadingstart();
  var i = offset;
  async function getObject1() {
    let o = await getResponse(url);
    await getdetails(o);
  }
  async function getdetails(obj) {
    var name = [];
    var height = [];
    var weight = [];
    var finalurl = [];
    var id =[];

    for (var i = 0; i < 20; i++) {
      name[i] = obj.results[i].name;
      var imageweburl = await getResponse(obj.results[i].url);
      height[i] = imageweburl.height;
      weight[i] = imageweburl.weight;
      id[i]= imageweburl.id;
      finalurl[i] = changeurl(imageweburl.sprites.other.home.front_default);
    }
    CreateFinalObj(name, finalurl, height, weight,id);
  }

  function CreateFinalObj(Finalname, FinalUrl, height, weight,id) {
    let obj = [];
    for (var i = 0; i < 20; i++) {
      obj[i] = {
        name: Finalname[i],
        url: FinalUrl[i],
        height: height[i],
        weight: weight[i],
        id: id[i],
      };
    }
    // console.log(obj);
    setItem1(obj);
    display(obj);
    loadingend();
   
  }

  function changeurl(url) {
    temp = url.replace(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
        i + 1
      }.png`,
      `http://192.168.29.118:3004/images/pokemon/other/home/${i + 1}.png`
    );
    i++;
    return temp;
  }
  async function getResponse(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  function setItem1(obj) {
    localStorage.setItem(1, JSON.stringify(obj));
  }

  function display(obj) {
    var identifier ;
    for (var i = 0; i < 20; i++) {
      document.getElementById(`item${i + 1}name`).innerHTML = obj[i].name;
      document.getElementById(`card${i + 1}`).src = obj[i].url;
     

      // console.log(`tempstring[${i+1}].url: `, obj[i].url);
    }
  }
  
  getObject1();
  
    
  
 
}
// 
// debugger


createElement();
createButtons();
run("https://pokeapi.co/api/v2/pokemon?offset=0 &limit=20", 0);



function loadingstart(){
  document.getElementById('maincontainer').style.display= 'none';
  document.getElementById('buttoncontainer').style.display= 'none';
  document.getElementById('loader').style.display = 'flex';
}
function loadingend(){
  document.getElementById('maincontainer').style.display ='grid';
  document.getElementById('buttoncontainer').style.display= 'flex';
  document.getElementById('loader').style.display = 'none';
}

