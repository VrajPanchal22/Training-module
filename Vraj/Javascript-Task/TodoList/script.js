let formData = document.querySelector('form');
let ls = localStorage.getItem('todos');
let todo = ls ? JSON.parse(ls) : [];
let idCount = 0;

function getNewId() {
    return idCount = idCount + 1;
    }

function getTodo () {
    let todoString = localStorage.getItem('todos');
    return JSON.parse(todoString);
    }

function setTodo (todoList) {
    let tododata = JSON.stringify(todoList);
    localStorage.setItem('todos', tododata);
    }

function renderTodos(todoList) {
    document.querySelector("ul").innerHTML = "";
    todoList.map((data, index) => {
    document.querySelector("ul").innerHTML += 
    `
    <div value="${index}" class="list-group-item" id='outputDiv'>  
        <div>   
            <span> ${index}. </span>
            <span class="${data.completed? "checked" : ""}">  ${data.name} </span>
            <input class="form-check-input" type="checkbox" id="check-${index}" data-id="${index}"  onclick="handleCheckbox(this)" ${data.completed? "checked" :""}>
        </div>
        <button class="del-btn" onclick="handleDelete(${index})" >Delete</button>
    </div>
    `
})
}

formData.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputData = formData[0].value;
    let todoList = getTodo()
    let todos ={
        id: getNewId(),
        name: inputData,
        completed: false,
        timeStamp: "" + new Date().getTime()
    }
    todoList.push(todos);
    setTodo(todoList);
    renderTodos(todoList);
})

function handleDelete(e) {
    let todoList = getTodo();
    let filteredList = todoList.filter((data, index) => {
        return index !== e;
    });
    setTodo(filteredList);
    renderTodos(filteredList);
}

function handleDeleteAll() {
    setTodo([]);
    renderTodos([]);
}

function filter(todoList){
    todoList = getTodo()
    filterList = [...todoList].sort((a,b) => b.timeStamp - a.timeStamp)
    console.log(filterList) 
    setTodo(filterList);
    renderTodos(filterList);
}

function completed(todoList){
    todoList = getTodo()
    let completedTask = [];
    todoList.forEach( (element)=> {
        if (element.completed === true) {
            completedTask.push(element)
        } 
    })
    console.log('Completed Task',completedTask)
    setTodo(todoList)
    renderTodos(completedTask)
}

function Pending(todoList){
    todoList = getTodo()
    let pendingTask = [];
    todoList.forEach( (element)=> {
        if (element.completed === false) {
            pendingTask.push(element)
        } 
    })
    console.log('Pending Task',pendingTask)
    setTodo(todoList)
    renderTodos(pendingTask)
}

function allTask(){
    todoList = getTodo()
    console.log('All Task',todoList)
    setTodo(todoList)
    renderTodos(todoList)

}

function handleCheckbox(element) {
    let itemPos = element.getAttribute("data-id")
    let isChecked = element.checked;
    // console.log('isChecked: ', isChecked);
    // console.log('itemPos: ', itemPos);
    let todoList = getTodo();
    let newTodoList = todoList.map((elem, index) => {
        if(index === parseInt(itemPos)){
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

