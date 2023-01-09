//showTask();
let formData = document.querySelector('form');
let ls = localStorage.getItem('todo');
let todo= ls==null ? []:JSON.parse(ls);
let sort_value1 = document.getElementById('sort');

//when we refresh the page data display on browser
showTask(todo);
function getNewId(){
  let getId = localStorage.getItem('idCount');
  let newId =JSON.parse(getId);
  localStorage.setItem('idCount',JSON.stringify(newId+1));
  return newId=newId+1;
}

//get data from the localstorage
function getTodo(){
    let todoString = localStorage.getItem('todo');
    let taskObj = todoString == null ? [] : JSON.parse(todoString);
     return taskObj;
  }

//set data in to the localstorage
function setTodo(todoList){
      localStorage.setItem('todo',JSON.stringify(todoList));
    }

    //display all the task on browser
    function showTask(todoList) {
      let html = '';
      let table = document.getElementById('mytable');
        todoList.map((item, index ) => {
          html += ` 
          <tr>
          <td id="item" class="${item.checkbox_value? "checked" :""}" >${item.id} . ${item.task}<td>
          <th><input type="checkbox" id="checkbox" data-id="${index}" name="select" onclick="handleCheckbox(this)" ${item.checkbox_value? "checked" :""}></th>
          <th><button style= "color: red" onclick=" delete_task(${index}) ">delete</button></th>
      </tr>`;
        });
        
        table.innerHTML = html;
    }
    
//when we click on submit button it add task in localstorage and display on browser
formData.addEventListener('submit', (e)=> {

  e.preventDefault();
  let input_task = formData[0].value;
  if(input_task.trim()!=0){
  var todoList = getTodo();
  const todoObj ={
      id:getNewId(),
      task:input_task,
      checkbox_value : false,
      timestamp : new Date().getTime()
  }
    todoList.push(todoObj);
    setTodo(todoList);
  }
    input_task.value = '';
    sort();
});

//when we click on the delete button it will delete task from the ui and localstorage also
function delete_task(index) {
  console.log(typeof(index))
    let todoList = getTodo();
    todoList.splice(index, 1);
    setTodo(todoList);
    showTask(todoList);
}


//it will delete all the task from ui and local storage also.
function deleteAll(){
  setTodo([]);
  showTask([]);
  localStorage.setItem('idCount',JSON.stringify(0))
}

//it change the checkbox_value for perticular task
function handleCheckbox(element) {
  console.log(element);
  let itemPos = element.getAttribute("data-id")
  let isChecked = element.checked;
  let todoList = getTodo();
  let newTodoList = todoList.map((elem, index) => {
      if(index === parseInt(itemPos)){
        let newElem = {
          id: elem.id,
          task: elem.task,
          checkbox_value: isChecked,
          timestamp:elem.timestamp 
        }
        return newElem   
      } else {
          return elem
      }
  })
  setTodo(newTodoList);
  showTask(newTodoList);
}

//it will show options for filter when we click on filter button
function showOptions() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  //it will show in completed task
function incompleted_task(){
    todoList= getTodo();
    let filteredTodo = todoList.filter((item)=>{
       return item.checkbox_value == false;
    })
    showTask(filteredTodo );
  }
 
  //it will show completed task
  function completed_task(){
    todoList= getTodo();
    let filteredTodo = todoList.filter((item)=>{
       return item.checkbox_value == true;
    })
    showTask(filteredTodo);
  }

  //it will show all task
  function all_task(){
    showTask(todo);
  }

  //check the value of checkbox
  function ischecked(){
    if(sort_value1.checked){
      return 1;
    }else{
      return 0;
    }
  }

  //short the values if the checkbox value is true
  function sort(){
    todoList=getTodo();
    var isChecked = ischecked();
    if(isChecked==1){
      let sorted_todoList=todoList.sort((obj1,obj2)=>{
        return obj2.timestamp - obj1.timestamp;
      });
      todoList = sorted_todoList;
      console.log(sorted_todoList);
      showTask(todoList);
    }else{
      showTask(todoList);
    }
  }

  


        