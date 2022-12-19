import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import productServices from "../auth/services/productService";

const initialState = {
    product: null,
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""

}
const createProduct = createAsyncThunk(
    "products/create",
    async(userData, thunkAPI)=>{
        try {
            return await productServices.createNewProduct
            
        } catch (error) {
        const message = error.response.data.message  || error.message || error.toStringyfy()
        return thunkAPI.rejectWithValue(message)
        }

    }
)
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        CLAC_STORE_VALUE(state, action){
            console.log("calculate value");
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createProduct.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            console.log(action.payload);
            state.products.push(action.payload)
            toast.success("Product added successfully")
        })
        .addCase(createProduct.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            toast.success(action.payload)
        })
    }
})
export const {CLAC_STORE_VALUE} = productSlice.actions
export default productSlice.reducer