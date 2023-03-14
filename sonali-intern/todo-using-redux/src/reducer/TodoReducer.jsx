import { createSlice } from '@reduxjs/toolkit'

const data = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
console.log(data)
// var id = 0;
// const getId = (id)=>{
//   return  id = id+1
// }
const todoSlice = createSlice({
  name: 'todo',
  initialState: {
  todoList: data || []
  },
  reducers: {
    addTodo: (state, action) => {
      const newItem = action.payload;
      console.log(newItem)
      state.todoList.push({
        id: Date.now(),
        todo:newItem,
        isCompleted:false
      })

      localStorage.setItem('todo',JSON.stringify(state.todoList.map(iteam => iteam)))
    },
    removeTodo: (state,action) =>{
      const id = action.payload
      const filteredList =  state.todoList.filter(todo => {return  todo.id !== id})
      state.todoList = filteredList
      localStorage.setItem('todo',JSON.stringify(state.todoList))
    },
    deleteAll: (state,action) => {
      state.todoList = []
      console.log(state.todoList)
      localStorage.setItem('todo',JSON.stringify(state.todoList))
    },

    isChecked: (state,action) => {
      const {isCheck, index} = action.payload
      let newTodoList = state.todoList.map((elem, i) => {
        if (index === i) {
            let newElem = {
                id: elem.id,
                todo: elem.todo,
                isCompleted: isCheck,
            }
            return newElem
        }
         else {
            return elem
        }
    })
    state.todoList = newTodoList;
    console.log(state.todoList)
    localStorage.setItem('todo',JSON.stringify(state.todoList))
    },

    showCompleted: (state,action) => {
    const data = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
    console.log(data)
    let filteredList =data.filter(element => {
        return element.isCompleted === true
    })
    console.log(filteredList)
    state.todoList = filteredList
    },

    showUnCompleted: (state,action) => {
      const data = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
      let filteredList = data.filter(element => {
        return element.isCompleted !== true
    })
    console.log(filteredList)
    
    state.todoList = filteredList
    },

    showAll: (state,action) => {
      const data = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
      state.todoList = data
    }
  }
})

export const { addTodo,removeTodo, deleteAll,isChecked,showCompleted,showUnCompleted , showAll} = todoSlice.actions
export default todoSlice.reducer