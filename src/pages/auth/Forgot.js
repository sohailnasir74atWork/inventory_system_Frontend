import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {MdOutlineMailOutline} from "react-icons/md"
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <MdOutlineMailOutline size={35} color="#999" />
                </div>
                <h2>Forgot Password</h2>
            <form>
              <input type="text" placeholder='Email' required name='Email'/>
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