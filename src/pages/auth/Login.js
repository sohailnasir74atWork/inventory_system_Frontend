import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {BiLogIn} from "react-icons/bi"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { emailValidation, getLoginStatus, loginUser } from '../../Redux/feature/auth/services/authServices'
import { SET_LOGIN, SET_NAME } from '../../Redux/feature/auth/authSlice'
import { useDispatch } from 'react-redux'
import Loader from '../../components/loader/Loader'


const initialData = {
  email: "",
  password: "",
}
const Login = () => {
  const despatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const {email, password} = formData
  
  const handleInPutChange = (e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})

  }
  const login = async (e)=>{
    e.preventDefault()

    if(!email || !password){
      toast.error("All fields must be entered")
    }
    
    if(password.length<6){
      toast.error("Incorrect Password")
    }
    if(!emailValidation){
      toast.error("Email is not valid")
    }
    const userData = {email, password}
    setIsLoading(true)
    try {
      const data = await loginUser(userData)
      await despatch(SET_LOGIN(true))
      await despatch(SET_NAME(data.name))
      navigate("/dashboard")
      setIsLoading(false)
      getLoginStatus()
      
    } catch (error) {
      setIsLoading(false)
      console.log(error.message);
    }
  }
  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader/>}
      <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <BiLogIn size={35} color="#999" />
                </div>
                <h2>Log In</h2>
            <form onSubmit={login}>
              <input type="text" placeholder='Email' required name='email' value={email} onChange={handleInPutChange}/>
              <input type="password"  placeholder='Password' required name='password' value={password} onChange={handleInPutChange}/>
              <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
            </form>
            <Link to="/forgot">Forgot Password</Link>
            <span className={styles.register}>
              <Link to="/">Home</Link>
              <p>&nbsp; Don't have a account? &nbsp;</p>
              <Link to="/register">Register</Link>
            </span>
        </div>
        </Card>
    </div>
  )
}

export default Login