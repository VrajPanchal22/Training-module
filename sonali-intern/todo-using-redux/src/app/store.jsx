import { configureStore } from "@reduxjs/toolkit"
import todoSlice from '../reducer/TodoReducer'
const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
    
  })

export default store  