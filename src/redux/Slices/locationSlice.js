import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  location: null
}
export const locationSlice = createSlice({
  name: 'user_location',
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      state.location = action.payload.location
    },
    unsetUserLocation: (state, action) => {
      state.location = action.payload.location
    },
  }
})

export const { setUserLocation, unsetUserLocation } = locationSlice.actions
export default locationSlice.reducer