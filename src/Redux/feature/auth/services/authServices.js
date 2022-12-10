import axios from "axios";
import { toast } from "react-toastify";
const url = process.env.BACK_END_URL


const register = async ({userData})=>{
    try {
        const response = await axios.post(`${url}api/users/register`, userData, {withCredentials: true} )
        if(response.statusText==="OK"){
                toast.success("User Registred Successfully")
        }
        return response.data
        
    } catch (error) {
        const message = (error.message && error.response.message && error.response.data && error.response.data.message) || error.message || error.toStringyfy()
        toast.error(message)
    }
    

}