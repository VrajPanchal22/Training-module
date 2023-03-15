import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: "",
  },
  reducers: {
    onchange: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { onchange } = taskSlice.actions

export default taskSlice.reducer