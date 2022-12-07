import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../Redux/feature/auth/authSlice"

export const store = configureStore({
    reducer:{
        auth : authReducer
    }
})