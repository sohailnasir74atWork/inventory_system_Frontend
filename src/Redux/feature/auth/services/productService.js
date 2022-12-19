import axios from "axios";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL


///////////////////////create new product//////////////////

export const createNewProduct = async (userData)=>{
    const response = await axios.post(`${BACKEND_URL}/api/products/createproduct`, userData )
    return response.data

    }

const productServices = {
    createNewProduct,
}
export default productServices