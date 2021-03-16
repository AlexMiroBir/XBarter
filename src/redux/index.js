import {combineReducers, configureStore} from "@reduxjs/toolkit"
import mainSlice from "./main-slice"




const rootReducer = combineReducers({
    mainSlice: mainSlice
})




const store = configureStore({
    reducer: rootReducer
})



export default store