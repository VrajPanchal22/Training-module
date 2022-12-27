const todoinput = document.querySelector(".taskinput-box input")
taskbox = document.querySelector(".todolist-box");
clearbtn = document.querySelector(".clearall-btn")
filters=document.querySelectorAll(".filters span");
let completed=document.getElementById('completed');
let pend=document.getElementById('pendingtask');
let all=document.getElementById('alltask');

let todos =JSON.parse(localStorage.getItem("todo-list")); 

let editid;
let isedited = false;

filters.forEach(ele=>{
ele.addEventListener('click',()=>{
    document.querySelector(".active").classList.remove('active');
    ele.classList.add('active')
    showtodo();
});
});

//function for all
function filteringall(){
    let todos =JSON.parse(localStorage.getItem("todo-list")); 
    showtodo(todos);
}
all.addEventListener('click',()=>{
    filteringall();
});

//function for completed
completed.addEventListener('click',()=>{
    filtering();
});

function filtering(){
    let todos =JSON.parse(localStorage.getItem("todo-list")); 
    let filteredarr = todos.filter((ele)=>{
        return ele.status=='completed';
        console.log(filteredarr);
    })
    showtodo(filteredarr);
}

//function for pending
pend.addEventListener('click',()=>{
    filteringpend();
})
function filteringpend(){
    let todos =JSON.parse(localStorage.getItem("todo-list")); 
    let filteredarr = todos.filter((ele)=>{
        return ele.status=='pending';
        console.log(filteredarr);
    })
    showtodo(filteredarr);
}

function showtodo(filteredarr){
    let li = "";
    if(filteredarr){
        filteredarr.forEach((todo,id) => {
        let iscompleted = todo.status == "completed" ? "checked":"";
        li += `
        <li class="todolist">
                <label for="${id}">
                    <input type="checkbox"  id="${id}" onclick="checkupdate(this)" ${iscompleted}>
                    <p class="${iscompleted}">${todo.name}</p>
                </label>
                <div class="editing">
                    <img src="/todo/img/list.png" alt="" srcset="" onclick="showmenu(this)">
                    <ul class="menu">
                        <li onclick="edittask(${id},'${todo.name}')">Edit</li>
                        <li onclick="deletetask(${id})">Delete</li>
                    </ul>
                </div>
            </li><hr>
        `
    });
}
    taskbox.innerHTML= li;
}
showtodo(todos);

// function showmenu(selectedtask){

// }

function deletetask(taskid){
    todos.splice(taskid,1);
    localStorage.setItem("todo-list",JSON.stringify(todos));
    showtodo(todos);
};

clearbtn.addEventListener('click',()=>{
    todos.splice(0,todos.length);
    localStorage.setItem("todo-list",JSON.stringify(todos));
    showtodo(todos);
});

function edittask(taskid,taskname){
    todoinput.value = taskname;
    editid=taskid;
    isedited=true;
    showtodo(todos);
};

function checkupdate(selectedtask){
    let taskname = selectedtask.parentElement.lastElementChild;
    if(selectedtask.checked){
        taskname.classList.add('checked')
        todos[selectedtask.id].status="completed"
    }
    else{
        taskname.classList.remove('checked')
        todos[selectedtask.id].status="pending"
    }
    localStorage.setItem("todo-list",JSON.stringify(todos));
};


todoinput.addEventListener('keyup',e =>{
    let usertask = todoinput.value.trim(); 
    if(e.key == "Enter" && usertask){
        //let todos =JSON.parse(localStorage.getItem("todo-list"));
        // if (!todos){
        //     todos = []; //array
        // }
        if(!isedited){
        let taskinfo = {name: usertask, status:"pending"};
        todos.push(taskinfo);
        }else{
            isedited=false;
            todos[editid].name = usertask;
        }
        todoinput.value="";
        localStorage.setItem("todo-list",JSON.stringify(todos));
        showtodo(todos);
    }
});  

