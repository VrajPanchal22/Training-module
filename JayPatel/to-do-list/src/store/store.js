import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from '../reducers/filters'
import taskReducer from '../reducers/task'
import taskListReducer from '../reducers/taskList'

export default configureStore({
  reducer: {
    task: taskReducer,
    taskList: taskListReducer,
    filters: filtersReducer
  },
})