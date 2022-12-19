import axios from "axios";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL


///////////////////////create new product//////////////////

export const createNewProduct = async (userData)=>{
    const response = await axios.post(`${BACKEND_URL}/api/products/createproduct`, userData )
    return response.data

    }
///////////////////////getAll Products//////////////////

export const getAllProduct = async ()=>{
    const response = await axios.get(`${BACKEND_URL}/api/products/getproducts`)
    return response.data

    }

const productServices = {
    createNewProduct, getAllProduct
}
export default productServices