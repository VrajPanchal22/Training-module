import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        value: localStorage.getItem('filters') ? JSON.parse(localStorage.getItem('filters')) : {
            latestFirst: false,
            viewPendingTask: false,
            viewCompletedTask: false
        }
    },
    reducers: {
        sortTasks: (state) => {
            state.value.latestFirst = !state.value.latestFirst
            localStorage.setItem('filters', JSON.stringify(state.value))
        },
        viewPendingTasks: (state) => {
            state.value.viewPendingTask = true
            state.value.viewCompletedTask = false
            localStorage.setItem('filters', JSON.stringify(state.value))
        },
        viewCompletedTasks: (state) => {
            state.value.viewPendingTask = false
            state.value.viewCompletedTask = true
            localStorage.setItem('filters', JSON.stringify(state.value))
        },
        viewAllTasks: (state) => {
            state.value.viewPendingTask = false
            state.value.viewCompletedTask = false
            localStorage.setItem('filters', JSON.stringify(state.value))
        }
    }
})

export const { sortTasks, viewCompletedTasks, viewPendingTasks, viewAllTasks } = filtersSlice.actions;

export default filtersSlice.reducer