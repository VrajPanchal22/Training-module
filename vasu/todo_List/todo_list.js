let Todo_element=[];
window.onload=function(){
    if(JSON.parse(localStorage.getItem("TodoElement")!=null)){
        Todo_element=JSON.parse(localStorage.getItem("TodoElement"))
        Display();
    }
}

function AddElement(){
    if(document.querySelector('.inputval').value.trim()!= ""){
        
        Todo_element.push(document.querySelector('.inputval').value.trim());
        if(localStorage.getItem("TodoElement")){
            localStorage.setItem("TodoElement",JSON.stringify(Todo_element));
        }
        else{
            localStorage.setItem("TodoElement",JSON.stringify(Todo_element));
        }
    }
    Display();
}
function Display(){
    document.querySelector(".List").innerHTML="";
    for(var i=0;i<Todo_element.length;i++){
        document.querySelector(".List").innerHTML += "<center><div class='element'> " + Todo_element[i] +"<img class='tick' src='/todo_List/tick.png' onclick='strike("+i+")'><button class='dustbin' onclick='del("+i+")'>X</div></center>"
    }
}
function del(index){
    Todo_element.splice(index,1);
    if(localStorage.getItem("TodoElement")){
        localStorage.setItem("TodoElement",JSON.stringify(Todo_element));
    }
    else{Todo_element
        localStorage.setItem("TodoElement",JSON.stringify(Todo_element));
    }
    Display();
}
function strike(index){
    if(Todo_element[index].includes("<del>")){
        Todo_element[index] = Todo_element[index].replace("<del>","");
        Todo_element[index] = Todo_element[index].replace("<del>","");

    }
    else{
        Todo_element[index]= '<del>'+Todo_element[index];
    }
    if(localStorage.getItem("TodoElement")){
        localStorage.setItem("TodoElement",JSON.stringify(Todo_element));
    }
    else{
        localStorage.setItem("TodoElement",JSON.stringify(Todo_element));
    }
    Display();
}
function Deleteall(){
    Todo_element.splice(0,Todo_element.length);
    if(localStorage.getItem("TodoElement")){
        localStorage.setItem("TodoElement",JSON.stringify(Todo_element));
    }
    else{
        localStorage.setItem("TodoElement",JSON.stringify(Todo_element));
    }
    Display();
}
function completed(){
    
    for(let i=0;i<Todo_element.length;i++){
        for(j=0;j<Todo_element.length;j++){
        if(!Todo_element[j].includes('<del>')){
            Todo_element.splice(j,1);

        }
    }
    console.log("Completed Elements: ",Todo_element);
    }
    Display2(Todo_element);
    Todo_element = JSON.parse(localStorage.getItem("TodoElement"));
   
   
}   
function incompleted(){
    for(let i=0;i<Todo_element.length;i++){
        for(j=0;j<Todo_element.length;j++){
        if(Todo_element[j].includes('<del>')){
            Todo_element.splice(j,1);

        }
    }
    console.log("Incompleted: ",Todo_element);
    }
    Display2(Todo_element);
    Todo_element = JSON.parse(localStorage.getItem('TodoElement'));
}

function Display2(temp){
    document.querySelector(".List").innerHTML="";
    for(var i=0;i<temp.length;i++){
        document.querySelector(".List").innerHTML += "<center><div class='element'> " + Todo_element[i] +"<img class='tick' src='/todo_List/tick.png' onclick='strike("+i+")'><button class='dustbin' onclick='del("+i+")'>X</div></center>"
    
    }
}
function sorted(){
    if(document.querySelector('.checkbox').checked){
        Todo_element =Todo_element.reverse();
        Display2(Todo_element);
        Todo_element = JSON.parse(localStorage.getItem('TodoElement'));  

    }
    else{
        Display2(Todo_element);
    }
    Todo_element = JSON.parse(localStorage.getItem('TodoElement'));

}