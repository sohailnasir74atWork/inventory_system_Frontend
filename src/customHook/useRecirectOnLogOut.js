import { getLoginStatus } from '../Redux/feature/auth/services/authServices'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { SET_LOGIN } from '../Redux/feature/auth/authSlice'
import { toast } from 'react-toastify'

function useRecirectOnLogOut(path) {
    const dispatch = useDispatch()
    const navugate = useNavigate()
    useEffect(()=>{
        const redirect = async  ()=>{
            const isLogedin = await getLoginStatus()
            dispatch(SET_LOGIN(isLogedin))
            if(!isLogedin){
                toast.info("SESSION EXPIRED, PLEASE LOGIN AGAIN")
                navugate(path)
            }
        }
        redirect()
    }, [path, dispatch, navugate])
     
}

export default useRecirectOnLogOut