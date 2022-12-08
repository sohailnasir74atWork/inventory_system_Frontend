import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {TiUserAddOutline} from "react-icons/ti"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <TiUserAddOutline size={35} color="#999" />
                
            </div>
            <h2>Register</h2>
            <form>
            <input type="text" placeholder='Name' required name='Name'/>
              <input type="text" placeholder='Email' required name='Email'/>
              <input type="password"  placeholder='Password' required name='password'/>
              <input type="password"  placeholder='Confirm Password' required name='password'/>
              <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
            </form>
            <span className={styles.register}>
              <Link to="/home">Home</Link>
              <p>&nbsp; Already have an account? &nbsp;</p>
              <Link to="/login">Login</Link>
            </span>
        </div>
        </Card>
    </div>
  )
}

export default Register