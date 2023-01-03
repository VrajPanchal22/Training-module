var id = window.location.search.slice(4)

let data = JSON.parse(sessionStorage.getItem('pokimonData'))[id];
console.log(data);
getDetailsOfOnePokimon(data)
function getDetailsOfOnePokimon(data) {
    let details = document.getElementById('details')
    console.log(data.name)
    details.innerHTML = ` 
    <h1 class='text-center mt-5'>About ${data.name}</h1>
    <div class="d-flex justify-content-evenly align-items-center bg-dark mt-5" >
    <div class='w-50'>
     <img class="card-img-bottom" src="${data.front_default}" alt="Card image"> 
    </div>
    <div class='d-flex justify-content-center   flex-column w-50'>
    <h1 class='text-light'>Name : ${data.name}</h1>
    <h2 class='text-light'>Height: ${data.height}</h2>
    <h2 class='text-light'>Weight: ${data.weight}</h2>
    </div>
    </div>`
}





