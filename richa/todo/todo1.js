var todoinput = document.querySelector(".taskinput-box input");
var taskbox = document.querySelector(".todolist-box");
var clearbtn = document.querySelector(".clearall-btn");
var filters = document.querySelectorAll(".filters span");
var completed = document.getElementById('completed');
var pend = document.getElementById('pendingtask');
var all = document.getElementById('alltask');
var todos = JSON.parse(localStorage.getItem("todo-list"));
console.log(Array.isArray(todos));
console.log(todos);
var editid;
var isedited = false;
// interface ToDo{
//     body:TaskInfo;
// }
filters.forEach(function (ele) {
    ele.addEventListener('click', function () {
        document.querySelector(".active").classList.remove('active');
        ele.classList.add('active');
        showtodo("");
    });
});
//function for all
function filteringall() {
    var todos = JSON.parse(localStorage.getItem("todo-list"));
    showtodo(todos);
}
all.addEventListener('click', function () {
    filteringall();
});
//function for completed
completed.addEventListener('click', function () {
    filtering();
});
function filtering() {
    var todos = JSON.parse(localStorage.getItem("todo-list"));
    var filteredarr = todos.filter(function (ele) {
        return ele.status == 'completed';
        console.log(filteredarr);
    });
    showtodo(filteredarr);
}
//function for pending
pend.addEventListener('click', function () {
    filteringpend();
});
function filteringpend() {
    var todos = JSON.parse(localStorage.getItem("todo-list"));
    var filteredarr = todos.filter(function (ele) {
        return ele.status == 'pending';
        //console.log(filteredarr);
    });
    showtodo(filteredarr);
}
function showtodo(filteredarr) {
    var li = "";
    if (filteredarr) {
        filteredarr.forEach(function (todo, id) {
            var iscompleted = todo.status == "completed" ? "checked" : "";
            li += "\n        <li class=\"todolist\">\n                <label for=\"".concat(id, "\">\n                    <input type=\"checkbox\"  id=\"").concat(id, "\" onclick=\"checkupdate(this)\" ").concat(iscompleted, ">\n                    <p class=\"").concat(iscompleted, "\">").concat(todo.name, "</p>\n                </label>\n                <div class=\"editing\">\n                    <img src=\"/todo/img/list.png\" alt=\"\" srcset=\"\" onclick=\"showmenu(this)\">\n                    <ul class=\"menu\">\n                        <li onclick=\"edittask(").concat(id, ",'").concat(todo.name, "')\">Edit</li>\n                        <li onclick=\"deletetask(").concat(id, ")\">Delete</li>\n                    </ul>\n                </div>\n            </li><hr>\n        ");
        });
    }
    taskbox.innerHTML = li;
}
showtodo(todos);
// function showmenu(selectedtask){
// }
function deletetask(taskid) {
    todos.splice(taskid, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showtodo(todos);
}
;
clearbtn.addEventListener('click', function () {
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showtodo(todos);
});
function edittask(taskid, taskname) {
    todoinput.value = taskname;
    editid = taskid;
    isedited = true;
    showtodo(todos);
}
;
function checkupdate(selectedtask) {
    var taskname = selectedtask.parentElement.lastElementChild;
    if (selectedtask.checked) {
        taskname.classList.add('checked');
        todos[selectedtask.id].status = "completed";
    }
    else {
        taskname.classList.remove('checked');
        todos[selectedtask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}
;
todoinput.addEventListener('keyup', function (e) {
    var usertask = todoinput.value.trim();
    if (e.key == "Enter" && usertask) {
        //let todos =JSON.parse(localStorage.getItem("todo-list"));
        // if (!todos){
        //     todos = []; //array
        // }
        if (!isedited) {
            var taskinfo = { name: usertask, status: "pending" };
            todos.push(taskinfo);
        }
        else {
            isedited = false;
            todos[editid].name = usertask;
        }
        todoinput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showtodo(todos);
    }
});
