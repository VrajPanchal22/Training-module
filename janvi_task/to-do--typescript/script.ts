let formData = document.querySelector('form') as HTMLFormElement;
let ls = localStorage.getItem('todo');
interface toDo {
    id:number,
    task:string,
    checkbox_value:boolean,
     timestamp:number
};
let todo:toDo[]= ls==null? []:JSON.parse(ls);
let sort_value1 = <HTMLInputElement>document.getElementById('sort');


isDataInSessionStorage(todo);

function isDataInSessionStorage(todo: toDo[]){
    if(typeof todo !== 'undefined'){
        showTask(todo);
    }
}

function getNewId(){
    let getId = localStorage.getItem('idCount');
    let newId:number =getId== null? 0 :parseInt(getId);
        localStorage.setItem('idCount',JSON.stringify(newId+1));
        return newId=newId+1;
  }

  function getTodo():toDo[]{
    let todoString = localStorage.getItem('todo');
    let taskObj:toDo[] = todoString == null ? [] : JSON.parse(todoString);
     return taskObj;
  }

  function setTodo(todoList:{}[]|toDo[]){
    localStorage.setItem('todo',JSON.stringify(todoList));
  }

   //display all the task on browser

   function showTask(todoList : toDo[]) {
    let html = '';
    let table = document.getElementById('mytable') as HTMLElement;
      todoList?.map((item, index ) => {
        html += ` 
        <tr>
        <td id="item" class="${item.checkbox_value? "checked" :""}" >${item.id} . ${item.task}<td>
        <th><input type="checkbox" id="checkbox" data-id="${index}" name="select" onclick="handleCheckbox(this)" ${item.checkbox_value? "checked" :""}></th>
        <th><button style= "color: red" onclick=" delete_task(${index}) ">delete</button></th>
    </tr>`;
      });
      
      table.innerHTML = html;
  }

  formData.addEventListener('submit', (e)=> {

    e.preventDefault();
    let input_task = (<HTMLInputElement>formData[0]).value;
    if(input_task.trim()!= ''){
    var todoList = getTodo();
    const todoObj : toDo={
        id:getNewId(),
        task:input_task,
        checkbox_value : false,
        timestamp : new Date().getTime()
    }
      todoList.push(todoObj);
      setTodo(todoList);
    }
    (<HTMLInputElement>formData[0]).value= '';
     sort();
  });

  function delete_task(index:number) {
      let todoList = getTodo();
      todoList.splice(index, 1);
      setTodo(todoList);
      showTask(todoList);
  }

  function showOptions() {
    let dropDown =<HTMLElement>document.getElementById("myDropdown");
    dropDown.classList.toggle("show");
  }

  function deleteAll(){
    setTodo([]);
    showTask([]);
    localStorage.setItem('idCount',JSON.stringify(0))
  }

  function incompleted_task(){
    let todoList= getTodo();
    let filteredTodo = todoList.filter((item)=>{
       return item.checkbox_value == false;
    })
    showTask(filteredTodo);
  }
 
  //it will show completed task
  function completed_task(){
    let todoList= getTodo();
    let filteredTodo = todoList.filter((item)=>{
       return item.checkbox_value == true;
    })
    showTask(filteredTodo);
  }

  //it will show all task
  function all_task(){
    showTask(todo);
  }


  function ischecked(){
    if(sort_value1.checked){
      return 1;
    }else{
      return 0;
    }
  }


   //short the values if the checkbox value is true
   function sort(){
    let  todoList=getTodo();
    var isChecked= ischecked();
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

  function handleCheckbox(element :HTMLInputElement) {
    let itemPos =element.getAttribute('data-id');
    let isChecked = element.checked;
    let todoList = getTodo();
    let newTodoList = todoList.map((elem, index) => {
        if(typeof itemPos === 'string'){
            if(index === parseInt(itemPos)){
                    let newElem :toDo = {
                      id: elem.id,
                      task: elem.task,
                      checkbox_value: isChecked,
                      timestamp:elem.timestamp 
                    }
                    return newElem   
                  } else {
                      return elem
                  }
                } else{
                    return elem;
                  }     
    })
    setTodo(newTodoList);
    showTask(newTodoList);
  }
