import { createSlice } from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        value: localStorage.getItem('to-do-list') ? JSON.parse(localStorage.getItem('to-do-list')) : []
    },
    reducers: {
        addTask: (state, action) => {
            if (action.payload) {

                const newTaskObj = {
                    task: action.payload,
                    completed: false,
                    timestamp: new Date().getTime()
                }

                state.value.push(newTaskObj)
                localStorage.setItem('to-do-list', JSON.stringify(state.value));
            }
        },
        deleteTask: (state, action) => {
            state.value = state.value.filter(ele => ele.timestamp != action.payload)
            localStorage.setItem('to-do-list', JSON.stringify(state.value));
        },
        deleteAll: (state) => {
            state.value = []
            localStorage.setItem('to-do-list', JSON.stringify(state.value));
        },
        completeTask: (state, action) => {
            let index = 0;
            for (let i = 0; i < state.value.length; i++) {
                if (state.value[i].timestamp == action.payload) {
                    index = i;
                    break;
                }
            }

            state.value[index].completed = !state.value[index].completed
            localStorage.setItem('to-do-list', JSON.stringify(state.value));
        }
    }
})

export const { addTask, deleteTask, deleteAll, completeTask } = taskListSlice.actions

export default taskListSlice.reducer