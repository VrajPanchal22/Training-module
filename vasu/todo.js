const todoform =document.querySelector('todo-form')
const inputval = document.querySelector('inputval')
const todoitemList = document.querySelector('todo-items')

let todosarr = [];
todoform.addEventListener('submit',
function(event){
    event.preventDefault();
    addTodo(inputval.value);
}
);
function addTodo(item){
    if(item!==''){
        const todo ={
            id:Date.now(),
            name:item,
            completed:false

        };
        todosarr.push(todo);
        addToLocalStorage(todosarr);
        inputval.value='';
    }
}
function renderTodos(todosarr){
    todoitemList.innerHTML= " ";
     
    todosarr.forEach(function(item){
        const checked=item.completed ? 'checked':null;
        const li=document.createElement('li');
        li.setAttribute('class','item');
        li.setAttribute('data-key',item.id);
 
        if(item.completed==(true)){
        li.class.add('checked');
        }
        li.innerHTML=`
        
        <input class="checkbox" type="checkbox" ${checked}>
        ${item.name}
        <button class="deletetask">X</button>;
        
        `;
        todosarr.append('li');
    });
}

function addToLocalStorage(todosarr){
    localStorage.setItem('todosarr',JSON.stringify(todosarr));
    renderTodos(todosarr);
}
function getFromLocalStorage(){
    const reference =localStorage.getItem('todosarr');
    if(reference){
        todos = JSON.parse(reference);
        renderTodos(todosarr);
    }
}
function toggle(id){
    todosarr.forEach(function(item){
        if(item.id==id){
        item.completed = !item.completed
    }
});
addToLocalStorage(todosarr);
}
function deleteItem(id)
{
    todosarr=todosarr.filter(function(item){

        return item.id !=id;

    });
    addToLocalStorage();
    
}
getFromLocalStorage();

todoitemList.addEventListener('click',function(event){
        if(event.target.type === 'checkbox'){
            toggle(event.target.parentElement.getAttribute('data-key'))
        }

if(event.target.ClassList.container('delete-button')){
    deleteItem(event.target.parentElement.getAttribute('data-key'))
}
})




// addTaskBtn.addEventListener('click', () =>{

//     let localitems=JSON.parse(localStorage.getItem("localitem"))
//     if(localitems === null){
//         tasklist = []

//     }
//     else{
//         tasklist = localitems;
//     }
//     tasklist.push(inputval.value)
   
//     showlist()
    
// })
// function showlist(){

//     let output = "";
//     let tasklistshow = document.querySelector('.todolist')
//     let localitems = JSON.parse(localStorage.getItem("localitem"))
//     if(localitems === null){
//         tasklist = []

//     }
//     else{
//         tasklist = localitems;
//     }
//     tasklist.forEach((data, index) => {
      

      

//     });
//     tasklistshow.innerHTML = output;
// }
// showlist()

// function deleteItem(index){
//     let localitems=JSON.parse(localStorage.getItem("localitem"))
//     //let localitems=JSON.parse(localStorage.getItem("localitem"))
//     tasklist.splice(index,1)
//     localStorage.setItem('localitem',JSON.stringify(tasklist))
//     showlist()
// }

// function clearTask(){
//     localStorage.clear()
//     showlist()
// }
