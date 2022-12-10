import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {TiUserAddOutline} from "react-icons/ti"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { emailValidation, registerUser } from '../../Redux/feature/auth/services/authServices'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { SET_LOGIN, SET_NAME } from '../../Redux/feature/auth/authSlice'


const initialData = {
  name: "",
  email: "",
  password: "",
  password2: "",
}

const Register = () => {
  const despatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const {name, email, password, password2} = formData
  
  const handleInPutChange = (e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})

  }
  const register = async (e)=>{
    e.preventDefault()
    if(!name || !email || !password || !password2){
      toast.error("All fields must be entered")
    }
    if(password !== password2){
      toast.error("Please type correct password")
    }
    if(password.length<6){
      toast.error("Passowrd must be at least 6 digits")
    }
    if(!emailValidation){
      toast.error("Email is not valid")
    }
    const userData = {name, email, password}
    setIsLoading(true)
    try {
      const data = await registerUser(userData)
      await despatch(SET_LOGIN(true))
      await despatch(SET_NAME(data.name))
      navigate("/dashboard")
      setIsLoading(false)
      
    } catch (error) {
      setIsLoading(false)
      console.log(error.message);
    }
    

  }
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <TiUserAddOutline size={35} color="#999" />
                
            </div>
            <h2>Register</h2>
            <form onSubmit={register}>
            <input type="text" placeholder='Name' required name='name' value={name} onChange={handleInPutChange}/>
              <input type="text" placeholder='Email' required name='email' value={email} onChange={handleInPutChange}/>
              <input type="password"  placeholder='Password' required name='password' value={password} onChange={handleInPutChange}/>
              <input type="password"  placeholder='Confirm Password' required name='password2' value={password2} onChange={handleInPutChange}/>
              <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
            </form>
            <span className={styles.register}>
              <Link to="/">Home</Link>
              <p>&nbsp; Already have an account? &nbsp;</p>
              <Link to="/login">Login</Link>
            </span>
        </div>
        </Card>
    </div>
  )
}

export default Register