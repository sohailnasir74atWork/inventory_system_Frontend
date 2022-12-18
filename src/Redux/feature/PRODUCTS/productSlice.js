import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: null,
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""

}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        CLAC_STORE_VALUE(state, action){
            console.log("calculate value");
        }
    },
    extraReducers:(builder)=>{

    }
})
export const {CLAC_STORE_VALUE} = productSlice.actions
export default productSlice.reducer