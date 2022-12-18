import axios from "axios";
import { toast } from "react-toastify";
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const emailValidation = async (email)=>{
    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
}
export const registerUser = async (userData)=>{
    
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/register`, userData, {withCredentials: true} )
        if(response.statusText==="OK"){
                toast.success("User Registred Successfully")
        }
        return response.data
        
    } catch (error) {
        const message = error.response.data.message  || error.message || error.toStringyfy()
        toast.error(message)
    }
    

}

/////////////////////////////////LOGIN /////////////////////////////////////////
export const loginUser = async (userData)=>{
    
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/login`, userData, {withCredentials: true} )
        console.log(response);
        if(response.statusText==="OK"){
                toast.success("Login Successfully.....")
        }
        return response.data
        
    } catch (error) {
        const message = error.response.data.message  || error.message || error.toStringyfy()
        toast.error(message)
    }
    

}
///////////////////////////////////////logout///////////////////////////
export const logoutUser = async ()=>{
    
    try {
        await axios.post(`${BACKEND_URL}/api/users/logout`)        
        
    } catch (error) {
        const message = error.response.data.message  || error.message || error.toStringyfy()
        toast.error(message)
    }
    

}
///////////////////////////////////////forget password///////////////////////////
export const forgetPassword = async (userData)=>{
    
    try {
        const response = await axios.post(`${BACKEND_URL}/api/users/forgetpassword`, userData, {withCredentials: true})  
        if(response.statusText==="OK"){
            toast.success(response.data.message)
    }
     
    } catch (error) {
        const message = error.response.data.message  || error.message || error.toStringyfy()
        toast.error(message)
    }
    

}
///////////////////////////////////////reset password///////////////////////////
export const resetPassword = async (userData, resetToken)=>{
    
    try {
        const response = await axios.put(`${BACKEND_URL}/api/users/resetpassword/${resetToken}`, userData)  
        toast.success("Logedin successfully.....")
        return response.data
    
     
    } catch (error) {
        const message = error.response.data.message  || error.message || error.toStringyfy()
        toast.error(message)
    }
    

}
///////////////////////////////////////forget password///////////////////////////
export const getLoginStatus = async ()=>{
    
    try {
        const response = await axios.get(`${BACKEND_URL}/api/users/logedinstatus`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        const message = error.response.data.message  || error.message || error.toStringyfy()
        toast.error(message)
    }
    

}