import {createSlice} from "@reduxjs/toolkit"

export const sessionSlice = createSlice(
  {
    name: "selectedDevice",
    initialState:{},
    reducers:{
      setDeviseSelected: (state,action)=>{
        state.selectedDevice = action.payload
      },
      unsetDeviseSelected: state =>{
        state.selectedDevice = null
      }
    }
  }
)

export const {setDeviseSelected,unsetDeviseSelected} = sessionSlice.actions

export const deviceSelector = state => state.selectedDevice;

export default sessionSlice.reducer
