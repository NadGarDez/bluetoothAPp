import {configureStore} from "@reduxjs/toolkit"
import deviceSlice from "./deviceSlice"

export default configureStore(
  {
    reducer:{
      selectedDevice:deviceSlice
    }
  }
)
