import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../Redux/feature/auth/authSlice"
import productReducer from "../Redux/feature/PRODUCTS/productSlice"

export const store = configureStore({
    reducer:{
        auth : authReducer,
        product : productReducer
    }
})