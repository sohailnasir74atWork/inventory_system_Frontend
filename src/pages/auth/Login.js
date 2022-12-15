import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {BiLogIn} from "react-icons/bi"
import { Link } from 'react-router-dom'

const Login = () => {
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
                <BiLogIn size={35} color="#999" />
                </div>
                <h2>Log In</h2>
            <form>
              <input type="text" placeholder='Email' required name='Email'/>
              <input type="password"  placeholder='Password' required name='password'/>
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