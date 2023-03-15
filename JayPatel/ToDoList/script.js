
let tasklist = [];

let viewCompletedTask = false;
let viewPendingTask = false;

if (!localStorage.getItem("todolist")) {
    localStorage.setItem("todolist", "[]")
}

let latestFirst = localStorage.getItem("latestFirst") ? JSON.parse(localStorage.getItem("latestFirst")) : false;
if(latestFirst) {
    document.getElementById("sort").innerHTML = "Latest First"
}
else {
    document.getElementById("sort").innerHTML = "Latest Last"
}

// ----------------------Load all task-----------------------------

loadTask()
function loadTask() {

    tasklist = JSON.parse(localStorage.getItem("todolist"))

    // spread Operator
    temptasklist = new Array(...tasklist);

    // ascending or descending
    if (latestFirst) {
        temptasklist.sort((a, b) => {
            return b.timestamp - a.timestamp;
        })
    }

    // view completed task
    if (viewCompletedTask && !viewPendingTask) {
        // filter method didnot change original object
        temptasklist = temptasklist.filter(ele => ele.completed)
    }
    // view pending task
    else if (!viewCompletedTask && viewPendingTask) {
        temptasklist = temptasklist.filter(ele => !ele.completed)
    }


    // add items in DOM
    ul = document.getElementById("tasks");
    ul.innerHTML = '';

    temptasklist.map((obj, index) => {
        // console.log(obj);
        ul.innerHTML += `<li class="todolist__task">
                    <label for=${"" + obj.timestamp} class=${obj.completed ? "label--textdecorator" : ""} >
                    <input type="checkbox" id=${"" + obj.timestamp} name=${"task" + index} ${obj.completed ? "checked" : ""}> ${obj.task}</label>
                    <button class="button--delete" onclick="deleteTask(${obj.timestamp})" >delete</button>
                    </li>`
    })

}



// -----------------------Add task----------------------------

document.addEventListener("submit", (event) => {
    event.preventDefault();

    if(document.getElementById("newtask").value === "") {
        return
    }

    console.log(tasklist[tasklist.length - 1]);
    newTaskObj = {
        id: tasklist.length != 0 ? tasklist[tasklist.length - 1].id + 1 : 0,
        task: document.getElementById("newtask").value,
        completed: false,
        timestamp: new Date().getTime()
    }

    tasklist.push(newTaskObj)
    localStorage.setItem("todolist", JSON.stringify(tasklist));

    document.getElementById("newtask").value = "";
    loadTask();
})



// ------------------------Event handing for all task---------------------------------

document.getElementById("tasks").addEventListener("click", event => {
    if (event.target.id != "tasks") {
        completed = event.target.checked

        if (completed != undefined) {
            index = 0;

            // can't break
            // tasklist.forEach((ele, i) => {
            //     if(ele.index == event.target.id) {
            //         index = i;
            //     }
            // })

            for (i = 0; i < tasklist.length; i++) {
                if (tasklist[i].timestamp == event.target.id) {
                    index = i;
                    break;
                }
            }

            // update status of the task
            tasklist[index].completed = completed;
            localStorage.setItem("todolist", JSON.stringify(tasklist));

            loadTask()
        }
    }

})



// -----------------------delete task--------------------------------

function deleteTask(timestamp) {

    tasklist = tasklist.filter(ele => ele.timestamp != timestamp)

    localStorage.setItem("todolist", JSON.stringify(tasklist))
    loadTask()
}



// --------------------------delete all--------------------------------

function deleteAll() {
    localStorage.clear();

    //again initialize because of .getItem() method doesn't throw error
    localStorage.setItem("latestFirst", JSON.stringify(latestFirst))
    localStorage.setItem("todolist", "[]")

    loadTask()
}



// ---------------------------Sort-------------------------------

function sort() {

    latestFirst = !latestFirst
    localStorage.setItem("latestFirst", JSON.stringify(latestFirst))

    if(latestFirst) {
        document.getElementById("sort").innerHTML = "Latest First"
    }
    else {
        document.getElementById("sort").innerHTML = "Latest Last"
    }
    loadTask()
}



// --------------------------- showCompletedTasks -------------------------------

function showCompletedTasks() {
    viewCompletedTask = true;
    viewPendingTask = false;
    loadTask()
}



// --------------------------showPendingTasks--------------------------------

function showPendingTasks() {
    viewCompletedTask = false;
    viewPendingTask = true;
    loadTask()
}



// ---------------------------showAllTasks-------------------------------

function showAllTasks() {
    viewCompletedTask = false;
    viewPendingTask = false;
    loadTask()
}


// --------------------------button clicked--------------------------------


document.getElementById("buttons").addEventListener("click", (event) => {
    // console.log(event.target);
    buttons = Object.values(event.target.parentNode.children);
    // console.log(event.target.parentNode.children);

    if(event.target.id != "buttons") {
        console.log(event.target);
        
        buttons.forEach(button => {
            if(button === event.target) {
                button.classList.add("buttons__btn--clicked")
                console.log("yes = ", button);
            }
            else {
                button.classList.remove("buttons__btn--clicked")
                console.log("no = ", button);
            }
        });
        

    }
})