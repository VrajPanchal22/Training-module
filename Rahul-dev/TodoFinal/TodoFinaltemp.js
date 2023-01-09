var elements = [];
window.onload = function () {
    let temp = localStorage.getItem("todo-elements");
    if (JSON.parse(temp)) {
        elements = JSON.parse(temp);
        Display();
    }
};
function addElement() {
    let inp = document.querySelector(".addTxt");
    if (inp.value.trim() != "") {
        elements.push(inp.value.trim());
        if (localStorage.getItem("todo-elements")) {
            localStorage.setItem("todo-elements", JSON.stringify(elements));
        }
        else {
            localStorage.setItem("todo-elements", JSON.stringify(elements));
        }
    }
    Display();
}
function Display() {
    let temp = document.querySelector(".list");
    temp.innerHTML = "";
    for (var i = 0; i < elements.length; i++) {
        temp.innerHTML +=
            "<center><div class='element'>" +
                elements[i] +
                "<img class='tick' src='/Photos/tick.png' onclick='strike(" +
                i +
                ")'><img class='dustbin' src='/Photos/trash.png' onclick='del(" +
                i +
                ")'></div></center>";
    }
}
function del(index) {
    elements.splice(index, 1);
    if (localStorage.getItem("todo-elements")) {
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    else {
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    Display();
}
function strike(index) {
    if (elements[index].includes("<del>")) {
        elements[index] = elements[index].replace("<del>", "");
        elements[index] = elements[index].replace("<del>", "");
    }
    else {
        elements[index] = "<del>" + elements[index];
    }
    if (localStorage.getItem("todo-elements")) {
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    else {
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    Display();
}
function deleteall() {
    elements.splice(0, elements.length);
    if (localStorage.getItem("todo-elements")) {
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    else {
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    Display();
}
function completed() {
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            if (!elements[j].includes("<del>")) {
                elements.splice(j, 1);
            }
        }
        console.log("Completed Elements: ", elements);
    }
    Display2(elements);
    let temp3 = localStorage.getItem("todo-elements");
    let temp2 = JSON.parse(temp3);
    elements = temp2;
}
function incompleted() {
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            if (elements[j].includes("<del>")) {
                elements.splice(j, 1);
            }
        }
        console.log("Incompleted: ", elements);
    }
    Display2(elements);
    let temp3 = localStorage.getItem("todo-elements");
    let temp2 = JSON.parse(temp3);
    elements = temp2;
}
function showall() {
    let temp3 = localStorage.getItem("todo-elements");
    let temp2 = JSON.parse(temp3);
    elements = temp2;
    console.log(elements);
    Display();
}
function Display2(temp) {
    let temp1 = document.querySelector(".list");
    temp1.innerHTML = "";
    for (var i = 0; i < temp.length; i++) {
        temp1.innerHTML +=
            "<center><div class='element'>" +
                elements[i] +
                "<img class='tick' src='/Photos/tick.png' onclick='strike(" +
                i +
                ")'><img class='dustbin' src='/Photos/trash.png' onclick='del(" +
                i +
                ")'></div></center>";
        // document.querySelector(".list").innerHTML  += "<center><div class='element'>"+elements[i]+"<img src='Photos/plus-circle1.png' onclick='strike("+i+")'>< img src ='Photos/user-trash-full-icon.png' onclick='del("+i+")'></div></center>";
    }
}
function sorted() {
    let ischecked = document.querySelector(".box");
    if (ischecked.checked) {
        elements = elements.reverse();
        Display2(elements);
        let temp3 = localStorage.getItem("todo-elements");
        let temp2 = JSON.parse(temp3);
        elements = temp2;
    }
    else {
        Display2(elements);
    }
    let temp3 = localStorage.getItem("todo-elements");
    let temp2 = JSON.parse(temp3);
    elements = temp2;
}
