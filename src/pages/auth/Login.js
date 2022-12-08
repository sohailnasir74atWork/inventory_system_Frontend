import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {BiLogIn} from "react-icons/bi"
import { Link } from 'react-router-dom'

const Login = () => {
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
              <Link to="/home">Home</Link>
              <p>&nbsp; Don't have a account? &nbsp;</p>
              <Link to="/register">Register</Link>
            </span>
        </div>
        </Card>
    </div>
  )
}

export default Login