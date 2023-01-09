var elements: string[] = [];
window.onload = function (): void {
  let temp = localStorage.getItem("todo-elements");
  if (JSON.parse(temp!)) {
    elements= JSON.parse(temp!);
    Display();
  }
};
function addElement():void{
  let inp:HTMLInputElement = document.querySelector(".addTxt") as HTMLInputElement;
  if (inp.value.trim() != "") {
    elements.push(inp.value.trim());

    if (localStorage.getItem("todo-elements")) {
      localStorage.setItem("todo-elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
  }
  Display();
}
function Display():void {
  let temp:HTMLUListElement = document.querySelector(".list") as HTMLUListElement;
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
function del(index: number):void {
  elements.splice(index, 1);
  if (localStorage.getItem("todo-elements")) {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }
  Display();
}
function strike(index: number):void {
  if (elements[index].includes("<del>")) {
    elements[index] = elements[index].replace("<del>", "");
    elements[index] = elements[index].replace("<del>", "");
  } else {
    elements[index] = "<del>" + elements[index];
  }
  if (localStorage.getItem("todo-elements")) {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }
  Display();
}

function deleteall():void {
  elements.splice(0, elements.length);
  if (localStorage.getItem("todo-elements")) {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("todo-elements", JSON.stringify(elements));
  }
  Display();
}
function completed():void {
  for (let i:number = 0; i < elements.length; i++) {
    for (let j:number = 0; j < elements.length; j++) {
      if (!elements[j].includes("<del>")) {
        elements.splice(j, 1);
      }
    }
    console.log("Completed Elements: ", elements);
  }
  Display2(elements);
  let temp3:string|null = localStorage.getItem("todo-elements");
  let temp2:any = JSON.parse(temp3!);

  elements = temp2;
}

function incompleted() {
  for (let i:number = 0; i < elements.length; i++) {
    for (let j:number = 0; j < elements.length; j++) {
      if (elements[j].includes("<del>")) {
        elements.splice(j, 1);
      }
    }
    console.log("Incompleted: ", elements);
  }
  Display2(elements);
  let temp3:string|null = localStorage.getItem("todo-elements");
  let temp2:any = JSON.parse(temp3!);

  elements = temp2;
}

function showall() {
  let temp3:string|null = localStorage.getItem("todo-elements");
  let temp2 = JSON.parse(temp3!);
  elements = temp2;

  console.log(elements);
  Display();
}

function Display2(temp: string[]) {
  let temp1 = document.querySelector(".list") as HTMLUListElement;
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
  let ischecked:HTMLInputElement = document.querySelector(".box") as HTMLInputElement;
  
  if (ischecked.checked) {
    elements = elements.reverse();
    Display2(elements);
    let temp3:string|null = localStorage.getItem("todo-elements");
    let temp2 = JSON.parse(temp3!);
    elements = temp2;
  } else {
    Display2(elements);
  }
  let temp3:string|null = localStorage.getItem("todo-elements");
  let temp2 = JSON.parse(temp3!);
  elements = temp2;
}
