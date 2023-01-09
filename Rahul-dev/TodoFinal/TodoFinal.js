var elements= [];
window.onload = function (){
    if(JSON.parse(localStorage.getItem("todo-elements"))!=null){
        elements = JSON.parse(localStorage.getItem("todo-elements"));
        Display();
    }
}
function addElement(){
    if(document.querySelector('.box').checked){
        elements.unshift(document.querySelector('.addTxt').value.trim());
        if(localStorage.getItem("todo-elements")){
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
        else{
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }

    }
    else{
    if(document.querySelector('.addTxt').value.trim()!= ""){
        
        elements.push(document.querySelector('.addTxt').value.trim());


        
        if(localStorage.getItem("todo-elements")){
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
        else{
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
    }
    }
    Display();


}
function Display(){
    document.querySelector(".list").innerHTML="";
    for(var i=0;i<elements.length;i++){
        document.querySelector(".list").innerHTML += "<center><div class='element'>"+ elements[i]+"<img class='tick' src='/Photos/tick.png' onclick='strike("+i+")'><img class='dustbin' src='/Photos/trash.png' onclick='del("+i+")'></div></center>";

        // document.querySelector(".list").innerHTML  += "<center><div class='element'>"+elements[i]+"<img src='Photos/plus-circle1.png' onclick='strike("+i+")'>< img src ='Photos/user-trash-full-icon.png' onclick='del("+i+")'></div></center>";


    }
}
function del(index){
    elements.splice(index,1);
    if(localStorage.getItem("todo-elements")){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    else{
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    Display();

}
function strike(index){
    if(elements[index].includes("<del>")){
        elements[index] = elements[index].replace("<del>","");
        elements[index] = elements[index].replace("<del>","");

    }
    else{
        elements[index]= '<del>'+elements[index];
    }
    if(localStorage.getItem("todo-elements")){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    else{
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    Display();
}

function deleteall(){
    elements.splice(0,elements.length);
    if(localStorage.getItem("todo-elements")){
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    else{
        localStorage.setItem("todo-elements",JSON.stringify(elements));
    }
    Display();

}
function completed(){
    
    for(let i=0;i<elements.length;i++){
        for(j=0;j<elements.length;j++){
        if(!elements[j].includes('<del>')){
            elements.splice(j,1);

        }
    }
    console.log("Completed Elements: ",elements);
    }
    Display2(elements);
    elements = JSON.parse(localStorage.getItem("todo-elements"));
   
   
}   
    
function incompleted(){
    for(let i=0;i<elements.length;i++){
        for(j=0;j<elements.length;j++){
        if(elements[j].includes('<del>')){
            elements.splice(j,1);

        }
    }
    console.log("Incompleted: ",elements);
    }
    Display2(elements);
    elements = JSON.parse(localStorage.getItem('todo-elements'));
}
    
function showall(){
    elements = JSON.parse(localStorage.getItem('todo-elements'));
    console.log(elements);
    Display();
}

function Display2(temp){
    document.querySelector(".list").innerHTML="";
    for(var i=0;i<temp.length;i++){
        document.querySelector(".list").innerHTML += "<center><div class='element'>"+ elements[i]+"<img class='tick' src='/Photos/tick.png' onclick='strike("+i+")'><img class='dustbin' src='/Photos/trash.png' onclick='del("+i+")'></div></center>";

        // document.querySelector(".list").innerHTML  += "<center><div class='element'>"+elements[i]+"<img src='Photos/plus-circle1.png' onclick='strike("+i+")'>< img src ='Photos/user-trash-full-icon.png' onclick='del("+i+")'></div></center>";


    }

}
function sorted(){
    if(document.querySelector('.box').checked){
        elements =elements.reverse();
        Display2(elements);
        elements = JSON.parse(localStorage.getItem('todo-elements'));
    }
    else{
        Display2(elements);

    }
    elements = JSON.parse(localStorage.getItem('todo-elements'));


}