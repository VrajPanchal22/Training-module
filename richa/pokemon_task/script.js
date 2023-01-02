let card = document.getElementById("card");
let taskbox = document.querySelector(".pokibox");
let nextbtn = document.getElementById("btn-next");
let prevbtn = document.getElementById("btn-prev");

let pageone = document.getElementById("page1");
let pagetwo = document.getElementById("page2");
let pagethree = document.getElementById("page3");

// let pokemonname=[];
let count;
let pokemonimg = [];
let pokiobj;
let limit = 20;
let play = 0;

if (sessionStorage.getItem("play")) {
  play = JSON.parse(sessionStorage.getItem("play"));
} else {
  play = 0;
}
console.log("plauy == ", play);

// card.innerHTML = ``;
// let url = ;
function getname() {
  loadingStart();
  fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${play}&limit=20`)
    .then((response) => response.json())
    .then((json) => {
      count = json.count;
      Promise.all(
        json.results.map((ele) => {
          return getimg(ele.url);
        })
      ).then((res) => {
        //console.log(pokemonimg);
        console.log("play = ", play);

        //console.log("splice:",pokemonimg.splice(0,20));
        let temp = pokemonimg.slice(play + 1, play + 21);
        //console.log("temp = ", temp);
        sessionStorage.setItem("play", play);
        temp.forEach((element) => {
          //console.log(element)
          mapping(element);
          loadingEnd();
        });
        sessionStorage.setItem("user", JSON.stringify(pokemonimg));
      });
    });
  // sessionStorage.clear();
}
// getname();

function getimg(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //     console.log(res.weight);
      //console.log(res.url);
      let iurl = res.sprites.other.home.front_default.replace(
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites",
        "http://192.168.29.118:3004/images"
      );
      //console.log(res.name);
      pokiobj = {
        id: res.id,
        name: res.name,
        imgurl: res.sprites.other.home.front_default.replace(
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites",
          "http://192.168.29.118:3004/images"
        ),
        height: res.height,
        weight: res.weight,
      };
      //console.log("dsad = ", pokiobj.id);
      //mapping(pokiobj);
      pokemonimg[pokiobj.id] = pokiobj;
      // console.log(pokemonimg);
      // pokemonimg.push(pokiobj);
    });
}

function mapping(obj) {
  //console.log("map");
  let id = obj.id;
  let li = "";
  li += `
  <a class="pokemon" id="${id}" href="index2.html?id=${id}"  style="text-decoration: none;">
    <div class="card" id="card" style="width: 18rem;">
      <img src="${obj.imgurl}" class="card-img-top" alt="...">
      <div> ${id} </div>
      <div class="card-body">
        <h5 class="card-title">${obj.name}</h5>
      </div>
    </div>
  </a>`;
  taskbox.innerHTML += li;
}

nextbtn.addEventListener("click", () => {
  taskbox.innerHTML = "";
  // url = `https://pokeapi.co/api/v2/pokemon/?offset=${play}&limit=20`;
  play += 20;
  getname();
});

// pageone.addEventListener("click", () => {
//   console.log("click triggered")
//   taskbox.innerHTML = "";
//   url = `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`;
//   getname();
// });

prevbtn.addEventListener("click", () => {
  taskbox.innerHTML = "";
  //url = `https://pokeapi.co/api/v2/pokemon/?offset=${play}&limit=20`;
  play -= 20;
  getname();
  //play -= 20;
});

// pagination script

const ulTag = document.querySelector("ul");
let totalpages = 58;
function element(totalpages, page) {
  let liTag = "";
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;
  taskbox.innerHTML = "";
  play = limit * (page - 1);
  getname();

  if (page > 1) {
    liTag += `<li class="btn prev" onclick="element(totalpages,${
      page - 1
    })"><span><i class="fa fa-arrow-left" aria-hidden="true"></i>Prev</span></li>`;
    // sessionStorage.setItem("play", play);
  }

  if (page > 2) {
    liTag += `<li class="numb " onclick="element(totalpages,1)"><span>1</span></li>`;
    // sessionStorage.setItem("play", play);
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page == totalpages) {
    beforePages = beforePages - 2;
  } else if (page == totalpages - 1) {
    beforePages = beforePages - 1;
  }

  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
    afterPages = afterPages + 1;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalpages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(totalpages,${pageLength})">${pageLength}<span></span></li>`;
    // sessionStorage.setItem("play", play);
  }

  if (page < totalpages - 1) {
    if (page < totalpages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb " onclick="element(totalpages,${totalpages})"><span>${totalpages}</span></li>`;
    // sessionStorage.setItem("play", play);
  }

  if (page < totalpages) {
    liTag += `<li class="btn next" onclick="element(totalpages,${
      page + 1
    })"><span>Next<i class="fa fa-arrow-right" aria-hidden="true"></i></span></li>`;
  }
  sessionStorage.setItem("play", play);
  ulTag.innerHTML = liTag;

  //let loaderBtn = document.getElementsByClassName('numb');
}
element(totalpages, (play/limit) + 1);

function loadingStart() {
  document.querySelector(".whole").style.display = "none";
  document.querySelector(".loader").style.display = "flex";
}

function loadingEnd() {
  document.querySelector(".whole").style.display = "grid";
  document.querySelector(".loader").style.display = "none";
}
