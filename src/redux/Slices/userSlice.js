import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user: null
}
export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
    },
    unsetUser: (state, action) => {
      state.user = action.payload.user
    },
  }
})

export const { setUser, unsetUser } = userSlice.actions
export default userSlice.reducer