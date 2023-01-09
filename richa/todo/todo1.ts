const todoinput = document.querySelector(".taskinput-box input") as HTMLInputElement;
let taskbox = document.querySelector(".todolist-box") as HTMLUListElement;
let clearbtn = document.querySelector(".clearall-btn")as HTMLButtonElement;
let filters = document.querySelectorAll(".filters span") as NodeListOf<Element>;
let completed=document.getElementById('completed') as HTMLElement;
let pend=document.getElementById('pendingtask')as HTMLElement;
let all=document.getElementById('alltask')as HTMLElement;

let todos:TaskInfo[] =JSON.parse(localStorage.getItem("todo-list") as string); 
console.log(Array.isArray(todos))
console.log(todos)

let editid:number;
let isedited:boolean = false;

interface TaskInfo{
    name:string;
    status:string;
}

// interface ToDo{
//     body:TaskInfo;
// }

filters.forEach(ele=>{
ele.addEventListener('click',()=>{
    document.querySelector(".active")!.classList.remove('active');
    ele.classList.add('active')
    showtodo("");
});
});

//function for all
function filteringall():void{
    let todos =JSON.parse(localStorage.getItem("todo-list")as string); 
    showtodo(todos);
}
all.addEventListener('click',()=>{
    filteringall();
});

//function for completed
completed.addEventListener('click',()=>{
    filtering();
});

function filtering():void{
    let todos =JSON.parse(localStorage.getItem("todo-list")as string); 
    let filteredarr = todos.filter((ele):boolean=>{
        return ele.status=='completed';
        console.log(filteredarr);
    })
    showtodo(filteredarr);
}

//function for pending
pend.addEventListener('click',():void=>{
    filteringpend();
})
function filteringpend():void{
    let todos =JSON.parse(localStorage.getItem("todo-list")as string); 
    let filteredarr = todos.filter((ele):boolean=>{
        return ele.status=='pending';
        //console.log(filteredarr);
    })
    showtodo(filteredarr);
}

function showtodo(filteredarr):void{
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

function deletetask(taskid:number):void{
    todos.splice(taskid,1);
    localStorage.setItem("todo-list",JSON.stringify(todos));
    showtodo(todos);
};

clearbtn.addEventListener('click',():void=>{
    todos.splice(0,todos.length);
    localStorage.setItem("todo-list",JSON.stringify(todos));
    showtodo(todos);
});

function edittask(taskid:number,taskname:string){
    todoinput.value = taskname;
    editid=taskid;
    isedited=true;
    showtodo(todos);
};

function checkupdate(selectedtask:HTMLInputElement){
    let taskname = selectedtask.parentElement!.lastElementChild;
    if(selectedtask.checked){
        taskname!.classList.add('checked')
        todos[selectedtask.id].status="completed"
    }
    else{
        taskname!.classList.remove('checked')
        todos[selectedtask.id].status="pending"
    }
    localStorage.setItem("todo-list",JSON.stringify(todos));
};


todoinput.addEventListener('keyup',e =>{
    let usertask:string = todoinput.value.trim(); 
    if(e.key == "Enter" && usertask){
        //let todos =JSON.parse(localStorage.getItem("todo-list"));
        // if (!todos){
        //     todos = []; //array
        // }
        if(!isedited){
        let taskinfo:TaskInfo = {name: usertask, status:"pending"};

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

