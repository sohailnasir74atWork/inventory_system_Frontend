import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {MdOutlineMailOutline} from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { emailValidation, forgetPassword } from '../../Redux/feature/auth/services/authServices'
import Loader from '../../components/loader/Loader'



const initialData = {
  email: "",
}
const Forgot = () => {
  // const despatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const {email} = formData
  
  const handleInPutChange = (e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})

  }
  const forget = async (e)=>{
    e.preventDefault()

    if(!email){
      toast.error("Please enter email")
    }
    
    if(!emailValidation){
      toast.error("Email is not valid")
    }
    const userData = {email}
    setIsLoading(true)
    try {
      await forgetPassword(userData)
      // await despatch(SET_LOGIN(true))
      // await despatch(SET_NAME(data.name))
      navigate("/login")
      setIsLoading(false)
      
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
                <MdOutlineMailOutline size={35} color="#999" />
                </div>
                <h2>Forgot Password</h2>
            <form onSubmit={forget}>
              <input type="text" placeholder='Email' required name='email' value={email} onChange={handleInPutChange}/>
              <button type='submit' className='--btn --btn-primary --btn-block'>Get Rest Email</button>
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

export default Forgot