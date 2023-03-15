interface TaskObj {
    id: number,
    task: string,
    completed: boolean,
    timestamp: number
}


let tasklist: TaskObj[] = [];

let viewCompletedTask: boolean = false;
let viewPendingTask: boolean = false;

if (!localStorage.getItem("todolist")) {
    localStorage.setItem("todolist", "[]")
}


function getElementById(id: string): HTMLElement | null {
    return document.getElementById(id);
}



let latestFirst: boolean = localStorage.getItem("latestFirst") != null ? JSON.parse(localStorage.getItem("latestFirst") as string) : false;
if (latestFirst) {
    let sortButton: HTMLElement | null = getElementById("sort");

    if (sortButton != null)
        sortButton.innerHTML = "Latest First"
}
else {
    let sortButton: HTMLElement | null = getElementById("sort");

    if (sortButton != null)
        sortButton.innerHTML = "Latest Last"
}

// ----------------------Load all task-----------------------------

loadTask()
function loadTask() {

    tasklist = JSON.parse(localStorage.getItem("todolist") as string)

    // spread Operator
    let temptasklist = new Array(...tasklist);

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
    let ul = getElementById("tasks");

    if (ul != null)
        ul.innerHTML = '';

    temptasklist.map((obj, index) => {
        // console.log(obj); 

        if (ul != null)
            ul.innerHTML += `<li class="todolist__task">
            <label for=${"" + obj.timestamp} class=${obj.completed ? "label--textdecorator" : ""} >
            <input type="checkbox" id=${"" + obj.timestamp} name=${"task" + index} ${obj.completed ? "checked" : ""} onclick="checkButton(id, checked)" > ${obj.task}</label>
            <button class="button--delete" onclick="deleteTask(${obj.timestamp})" >delete</button>
            </li>`
    })

}



// -----------------------Add task----------------------------

document.addEventListener("submit", (event) => {
    event.preventDefault();

    let newTask = getElementById("newtask") as HTMLInputElement;


    if (newTask != null) {
        if (newTask.value === "")
            return

        console.log(tasklist[tasklist.length - 1]);
        let newTaskObj: TaskObj = {
            id: tasklist.length != 0 ? tasklist[tasklist.length - 1].id + 1 : 0,
            task: newTask != null ? newTask.value : "",
            completed: false,
            timestamp: new Date().getTime()
        }

        tasklist.push(newTaskObj)
        localStorage.setItem("todolist", JSON.stringify(tasklist));


        newTask.value = "";
        loadTask();
    }
})



// ------------------------Event handing for all task---------------------------------

function checkButton(id: number, checked: boolean): void {

    console.log("id = ", typeof id, "check = ", checked);
    let index: number = 0;

    // can't break
    // tasklist.forEach((ele, i) => {
    //     if(ele.index == event.target.id) {
    //         index = i;
    //     }
    // })

    for (let i: number = 0; i < tasklist.length; i++) {
        if (tasklist[i].timestamp == id) {
            index = i;
            break;
        }
    }

    // update status of the task
    tasklist[index].completed = checked;
    localStorage.setItem("todolist", JSON.stringify(tasklist));

    loadTask()
}


// -----------------------delete task--------------------------------

function deleteTask(timestamp: number): void {
    // console.log("time = ", typeof timestamp);

    tasklist = tasklist.filter(ele => ele.timestamp != timestamp)

    localStorage.setItem("todolist", JSON.stringify(tasklist))
    loadTask()
}



// --------------------------delete all--------------------------------

function deleteAll(): void {
    localStorage.clear();

    //again initialize because of .getItem() method doesn't throw error
    localStorage.setItem("latestFirst", JSON.stringify(latestFirst))
    localStorage.setItem("todolist", "[]")

    loadTask()
}



// ---------------------------Sort-------------------------------

function sort(): void {

    latestFirst = !latestFirst
    localStorage.setItem("latestFirst", JSON.stringify(latestFirst))

    let sortButton: HTMLElement | null = getElementById("sort");

    if (sortButton != null) {
        if (latestFirst) {
            sortButton.innerHTML = "Latest First"
        }
        else {
            sortButton.innerHTML = "Latest Last"
        }
    }
    loadTask()
}



// --------------------------- showCompletedTasks -------------------------------

function showCompletedTasks(id: string): void {
    viewCompletedTask = true;
    viewPendingTask = false;
    buttonSelected(id)
    loadTask()
}



// --------------------------showPendingTasks--------------------------------


function showPendingTasks(id: string): void {
    viewCompletedTask = false;
    viewPendingTask = true;
    buttonSelected(id)
    loadTask()
}



// ---------------------------showAllTasks-------------------------------


function showAllTasks(id: string): void {
    viewCompletedTask = false;
    viewPendingTask = false;
    buttonSelected(id)
    loadTask()
}


// --------------------------button clicked--------------------------------


function buttonSelected(id: string) {
    let buttons = getElementById("buttons");

    if (buttons != null) {
        let buttonList: Element[] = Object.values(buttons.children);

        console.log("id = ", id, ", buttons = ", buttonList);
        buttonList.forEach((button, index) => {
            if (button.id == id) {
                console.log("button = ", button.classList, " index = ", index);
                button.classList.add("button__btn--clicked")
            }
            else {
                button.classList.remove("button__btn--clicked")
            }
        })
    }
}