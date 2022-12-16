import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {MdPassword } from "react-icons/md"
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { resetPassword } from '../../Redux/feature/auth/services/authServices'
import { toast } from 'react-toastify'
const initialData = {
  password:"",
  password2:""
}
const Rest = () => {
  const [fromData, setFormData] = useState(initialData)
  const {password, password2} = fromData
  const {resetToken} = useParams()
const inputhandlechange = (e)=>{
const {name, value} = e.target
setFormData({...fromData, [name]: value} )
}
const reset = async(e)=>{
  e.preventDefault()
  if(password.length < 6){
   return  toast.error("Password must be greater then 6 characters")
  }
  if(password !== password2){
    return  toast.error("Please enter correct password")
   }
   const userData = {password, password2}
   try
  {
  console.log(userData, resetToken);
  const data = await resetPassword(userData, resetToken)
  toast.success(data.message)}catch(error){
  toast.error(error.message)
  }

}
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <MdPassword  size={35} color="#999" />
                </div>
                <h2>Forgot Password</h2>
            <form onSubmit={reset}>
              <input type="text" placeholder='New Password' required name='password' value={password} onChange={inputhandlechange}/>
              <input type="text" placeholder='Confirm New Password' required name='password2' value={password2} onChange={inputhandlechange}/>
              <button type='submit' className='--btn --btn-primary --btn-block'>Rest Password</button>
              <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              </div>
            </form>
            
            
        </div>
        </Card>
    </div>
  )

}

export default Rest