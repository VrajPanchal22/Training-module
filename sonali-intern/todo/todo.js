let formData = document.querySelector('form');
let ls = localStorage.getItem('todo');
let todo = ls ? JSON.parse(ls) : [];
let idCount = 0;

// Get ID
function getNewId() {
    return idCount = idCount + 1;
}

// Get list of todos from LocalStorage
function getTodo() {
    let todoString = localStorage.getItem('todo');
    return JSON.parse(todoString);
}

//Set todos in LocalStorage
function setTodo(todoList) {
    let tododata = JSON.stringify(todoList);
    localStorage.setItem('todo', tododata);
}

// For Render todos
function renderTodos(todoList) {
        document.querySelector("ul").innerHTML = "";
        todoList.map((data, index) => {
            document.querySelector("ul").innerHTML += `<li value="${index}" class="list-group-item d-flex justify-content-between align-items-center w-100 shadow" id='li'>  
        <input class="form-check-input" type="checkbox" id="check-${index}" data-id="${index}"  onclick="handleCheckbox(this)" ${data.completed ? "checked" : ""}>
        <p class="${data.completed ? "checked" : ""}">${index}.  ${data.name}</p>
        <div>
        <button class="btn btn-dark" onclick="handleDelete(${index})">Delete</button>
        </div>
        </li>`
        })
    }


//onSubmit todos will be save & render
formData.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputData = formData[0].value;
    let todoList = getTodo();
    const todoObj = {
        id: getNewId(),
        name: inputData,
        completed: false,
        timestamp: new Date().getTime()
    }
    todoList.push(todoObj);
    setTodo(todoList);
    handleSort()
})

//For Delete todo
function handleDelete(e) {
    let todoList = getTodo();
    let filteredList = todoList.filter((data, index) => {
        return index !== e;
    });
    setTodo(filteredList);
    renderTodos(filteredList);
}

//For Delete all todos
function handleDeleteAll() {
    setTodo([]);
    renderTodos([]);
}

//For handle --- if the todo is completed so on the text will show line-throw
function handleCheckbox(element) {
    let itemPos = element.getAttribute("data-id")
    let isChecked = element.checked;
    console.log('isChecked: ', isChecked);
    console.log('itemPos: ', itemPos);
    let todoList = getTodo();
    let newTodoList = todoList.map((elem, index) => {
        if (index === parseInt(itemPos)) {
            let newElem = {
                id: elem.id,
                name: elem.name,
                completed: isChecked,
                timestamp: elem.timestamp
            }
            return newElem
        } else {
            return elem
        }
    })
    setTodo(newTodoList);
    renderTodos(newTodoList);
}


// To filter uncompleted todos
function toggleUncomplete() {
    document.getElementById('msg').innerHTML = "Uncomplete Todos"
    let todoList = getTodo();
    let filteredList = todoList.filter(element => {
        return element.completed !== true
    })
    console.log(filteredList)
    renderTodos(filteredList)
}

// To filter completed todos
function toggleCompleted() {
    let heading = document.querySelector('h2')
    heading.classList.add('p-4')
    document.getElementById('msg').innerHTML = "Completed Todos"
    let todoList = getTodo();
    let filteredList = todoList.filter(element => {
        return element.completed === true
    })
    console.log(filteredList)
    renderTodos(filteredList)
}

// To filter all todos
function toggleAll() {
    let todoList = getTodo();
    renderTodos(todoList)
    let heading = document.querySelector('h2')
    document.getElementById('msg').innerHTML = "All Todos"

}


//For handle sort
function handleSort(){
    let isChecked = document.getElementById("sortCheck")
    let todoList = getTodo();
    if(isChecked.checked === true){
        let sortedList = todoList.sort((a,b)=>{
            return b.timestamp - a.timestamp;  
        })
        renderTodos(sortedList)
        console.log("sort working")
    }

    if(isChecked.checked === false){
        renderTodos(todoList)
    }
}



renderTodos(todo);