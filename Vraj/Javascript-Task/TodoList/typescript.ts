let formData = document.querySelector('form') as HTMLFormElement;
let idCount:number = 0;
let ls:string | null = localStorage.getItem('todos');
let todo:Todos[] = ls ? JSON.parse(ls) : [];

interface Todos{
    id:number,
    name:string,
    completed:boolean,
    timeStamp:number
}


function getNewId():number {
    return idCount = idCount + 1;
    }

function getTodo (){
    let todoString: string| null = localStorage.getItem('todos');
    if (typeof todoString === 'string') {
        return JSON.parse(todoString) 
    }
    }

function setTodo (todoList:Todos[]) {
    let tododata:string = JSON.stringify(todoList);
    localStorage.setItem('todos', tododata);
    }


function renderTodos(todoList :Todos[]) {
        (document.querySelector("ul") as HTMLUListElement).innerHTML = "";   
        todoList.map((data:Todos, index:number) => {
        (document.querySelector("ul") as HTMLUListElement).innerHTML += 
        `
        <div value="${index}" class="list-group-item" id='outputDiv'>  
            <div>   
                <span> ${index + 1}. </span>
                <span class="${data.completed? "checked" : ""}">  ${data.name} </span>
                <input class form-check-input" type="checkbox" id="check-${index}" data-id="${index}"  onclick="handleCheckbox(this)" ${data.completed? "checked" :""}>
            </div>
            <button class="del-btn" onclick="handleDelete(${index})" >Delete</button>
        </div>
        `
    })
    }

formData.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    let inputData = (formData[0] as HTMLFormElement).value
    let todoList:Todos[] = getTodo()
    let todos:Todos ={
        id: getNewId(),
        name: inputData,
        completed: false,
        timeStamp: new Date().getTime()
    }
    todoList.push(todos);
    setTodo(todoList);
    renderTodos(todoList);
})


function handleDelete(e) {
    let todoList:Todos[] = getTodo();
    let filteredList = todoList.filter((data:Todos, index:number) => {
        return index !== e ;
    });
    setTodo(filteredList);
    renderTodos(filteredList);
}

function handleDeleteAll() {
    setTodo([]);
    renderTodos([]);
}



function handleCheckbox(element:HTMLInputElement) {
    let itemPos:string|null = element.getAttribute("data-id")
    let isChecked:boolean = element.checked;
    let todoList:Todos[] = getTodo();
    let newTodoList = todoList.map((elem:Todos, index:number):Todos => {
        if(index === parseInt(itemPos as string)){
          let newElem = {
            id: elem.id,
            name: elem.name,
            completed: isChecked,
            timeStamp: elem.timeStamp
          }
          return newElem   
        } else {
            return elem
        }
    })
    setTodo(newTodoList);
    renderTodos(newTodoList);
}
renderTodos(todo);