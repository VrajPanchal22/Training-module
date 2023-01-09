// let apiEndPoint = 'https://pokeapi.co/api/v2/pokemon/'
// http://192.168.29.118:3004/images/pokemon/other/home/1.png
// http://192.168.29.118:3004//pokeapi.co/api/v2/pokemon/


var limit = 20;
let getOffSet = sessionStorage.getItem('offset');
offset = getOffSet == null ? 0 : parseInt(JSON.parse(getOffSet));
 
//Main URL
function generateUrl(offset) {
    var url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`;
    getName(url)
};

pageId(offset);
generateUrl(offset);

// get name & url from Api 
async function getName(url) {
    try {
        const response1 = await fetch(url)
        if (response1.status != 200) {
            throw new Error(`here is some error ${response1.status}`)
        }
        const data1 = await response1.json()
        console.log(data1)
        getAnotherData(data1)
    } catch (err) {
        return err
    }
}


// Get list of data from sessionStorage
function getData() {
    let dataString = sessionStorage.getItem('pokimonData');
    let dataObj = dataString == null ? [] : JSON.parse(dataString)
    return dataObj
}

//Set data in sessionStorage
function setData(pokimonList) {
    sessionStorage.setItem('pokimonData', JSON.stringify(pokimonList));
}


// Get url's inside data 
function getAnotherData(data) {
    var listOfData = getData()
    let list = data.results.map((data, index) => {
        return new Promise((resolve, reject) => {
            document.getElementById('spinner').style.display = 'block'
            const response2 = fetch(data.url)
            response2.then(re => re.json()).then(e => {
                const obj = {
                    id: e.id,
                    name: data.name,
                    height: e.height,
                    weight: e.weight,
                    front_default: e.sprites.other.home.front_default.replace("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites", "http://192.168.29.118:3004/images")
                }
                listOfData.push(obj)
                resolve(obj)
            })
        });
    });
    Promise.all(list).then(data => {
        setData(data)
        renderData(data)
        document.getElementById('spinner').style.display = 'none'
    })
}



// For Render data
function renderData(data) {
    data.map((item, index) => {
        document.querySelector(".row").innerHTML += `<div class="col-3 text-center border" key=${item.id}>
        <img class="card-img-top mb-5 w-75" src="${item.front_default}" alt="Card image">
        <div class='d-flex justify-content-evenly align-items-center'>
        <h5 class="card-title text-light" id="card-title">${item.name.toUpperCase()} - ${item.id}</h5>
       <a href="pokiDetails.html?id=${index}" class="btn btn-primary">View details</a>
       </div>
      </div>
    </div>`
    })
}

// pagination
let btn = document.querySelectorAll('.page-link');
btn.forEach(element => {
    element.addEventListener('click', (e) => {
        if (element.id == 'next') {
            offset = offset;
            offset += limit;
            console.log(offset);
            pageId(offset);
            location.reload()
        }
        if (element.id == 'previous') {
            offset -= limit;
            pageId(offset);
            location.reload()
        }
        if (element.id == 1 || element.id == 2 || element.id == 3) {
            pagenumber = parseInt(element.innerText);
            console.log(pagenumber);
            offset = (pagenumber * limit) - limit;
            console.log(offset)
            location.reload()
        }
        sessionStorage.setItem('offset', offset);
        generateUrl(offset);
    })
})


//count and display page number for pagination
function pageId(offset) {
    id1 = document.getElementById('1');
    id1.innerHTML = (offset / limit) + 1;
    id2 = document.getElementById('2');
    id2.innerHTML = (offset / limit) + 2;
    id3 = document.getElementById('3');
    id3.innerHTML = (offset / limit) + 3;
}



