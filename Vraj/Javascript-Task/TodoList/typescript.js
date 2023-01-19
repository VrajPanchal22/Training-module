var ls = localStorage.getItem('todos');
var todo = ls ? JSON.parse(ls) : [];
var formData = document.querySelector('form');
var idCount = 0;
function getNewId() {
    return idCount = idCount + 1;
}
function getTodo() {
    var todoString = localStorage.getItem('todos');
    if (typeof todoString === 'string') {
        return JSON.parse(todoString);
    }
}
function setTodo(todoList) {
    var tododata = JSON.stringify(todoList);
    localStorage.setItem('todos', tododata);
}
function renderTodos(todoList) {
    document.querySelector("ul").innerHTML = "";
    todoList.map(function (data, index) {
        document.querySelector("ul").innerHTML +=
            "\n        <div value=\"".concat(index, "\" class=\"list-group-item\" id='outputDiv'>  \n            <div>   \n                <span> ").concat(index + 1, ". </span>\n                <span class=\"").concat(data.completed ? "checked" : "", "\">  ").concat(data.name, " </span>\n                <input class form-check-input\" type=\"checkbox\" id=\"check-").concat(index, "\" data-id=\"").concat(index, "\"  onclick=\"handleCheckbox(this)\" ").concat(data.completed ? "checked" : "", ">\n            </div>\n            <button class=\"del-btn\" onclick=\"handleDelete(").concat(index, ")\" >Delete</button>\n        </div>\n        ");
    });
}
formData.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputData = formData[0].value;
    var todoList = getTodo();
    var todos = {
        id: getNewId(),
        name: inputData,
        completed: false,
        timeStamp: new Date().getTime()
    };
    todoList.push(todos);
    setTodo(todoList);
    renderTodos(todoList);
});
function handleDelete(e) {
    var todoList = getTodo();
    var filteredList = todoList.filter(function (data, index) {
        return index !== e;
    });
    setTodo(filteredList);
    renderTodos(filteredList);
}
function handleDeleteAll() {
    setTodo([]);
    renderTodos([]);
}
function handleCheckbox(element) {
    var itemPos = element.getAttribute("data-id");
    var isChecked = element.checked;
    var todoList = getTodo();
    var newTodoList = todoList.map(function (elem, index) {
        if (index === parseInt(itemPos)) {
            var newElem = {
                id: elem.id,
                name: elem.name,
                completed: isChecked,
                timeStamp: elem.timeStamp
            };
            return newElem;
        }
        else {
            return elem;
        }
    });
    setTodo(newTodoList);
    renderTodos(newTodoList);
}
renderTodos(todo);
