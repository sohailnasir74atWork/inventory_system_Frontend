import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredProduct: []
    }

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        FILTER_PRODUCT(state, action){
        const {products, search} = action.payload 
        const tempProduct = products.filter((product)=> product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()))
        state.filteredProduct = tempProduct
        },
        
    }
})

export const {FILTER_PRODUCT} = filterSlice.actions
export const selectFilterProduct = (state) => state.filter.filteredProduct

export default filterSlice.reducer 