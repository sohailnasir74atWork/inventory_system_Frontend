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
///////////////////////////creating product/////////////////////////
export const createProduct = createAsyncThunk(
    "products/create",
    async(userData, thunkAPI)=>{
        try {
            return await productServices.createNewProduct(userData)
            
        } catch (error) {
        const message = error.response.data.message  || error.message || error.toStringyfy()
        return thunkAPI.rejectWithValue(message)
        }

    }
)
/////////////////////////////////////////////////////get all products///////////////////
export const getProduct = createAsyncThunk(
    "products/getAll",
    async(_, thunkAPI)=>{
        try {
            return await productServices.getAllProduct()
            
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
            state.isError = false
            console.log(action.payload);
            state.products.push(action.payload)
            toast.success("Product added successfully")
        })
        .addCase(createProduct.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.payload
            toast.error(action.payload)
        })
        .addCase(getProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getProduct.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            
            state.products = action.payload
        })
        .addCase(getProduct.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.payload
            toast.error(action.payload)
        })
    }
})





export const selectIsLoading = (state) => state.product.isLoading
export const selectIsError  = (state)=> state.product.isError
export const selectIsSuccess  = (state)=> state.product.isSuccess

export const {CLAC_STORE_VALUE} = productSlice.actions
export default productSlice.reducer