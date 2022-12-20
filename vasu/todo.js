const inputval = document.getElementsByClassName('inputval')[0]
const addTaskBtn = document.getElementsByClassName('button')[0]



addTaskBtn.addEventListener('click', () =>{

    let localitems=JSON.parse(localStorage.getItem("localitem"))
    if(localitems === null){
        tasklist = []

    }
    else{
        tasklist = localitems;
    }
    tasklist.push(inputval.value)
    localStorage.setItem("localitem",JSON.stringify(tasklist))
    showlist()
    
})
function showlist(){

    let output = "";
    let tasklistshow = document.querySelector('.todolist')
    let localitems = JSON.parse(localStorage.getItem("localitem"))
    if(localitems === null){
        tasklist = []

    }
    else{
        tasklist = localitems;
    }
    tasklist.forEach((data, index) => {
        output += `
        <div class="toDoList">
        <p class ="pText">${data}</p>
        <button class="deletetask" onClick="deleteItem(${index})">x</button>
        </div>

        `
    });
    tasklistshow.innerHTML = output;
}
showlist()

function deleteItem(index){
    let localitems=JSON.parse(localStorage.getItem("localitem"))
    //let localitems=JSON.parse(localStorage.getItem("localitem"))
    tasklist.splice(index,1)
    localStorage.setItem('localitem',JSON.stringify(tasklist))
    showlist()
}

function clearTask(){
    localStorage.clear()
    showlist()
}
