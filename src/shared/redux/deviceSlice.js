import {createSlice} from "@reduxjs/toolkit"

export const sessionSlice = createSlice(
  {
    name: "selectedDevice",
    initialState:'123',
    reducers:{
      setDeviseSelected: (state,action)=>{
        state.token = action.payload
      },
      unsetDeviseSelected: state =>{
        state.token = null
      }
    }
  }
)

export const {setDeviseSelected,unsetDeviseSelected} = sessionSlice.actions

export const deviceSelector = state => state.selectedDevice;

export default sessionSlice.reducer
