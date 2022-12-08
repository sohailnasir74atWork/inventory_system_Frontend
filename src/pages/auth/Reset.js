import styles from '../auth/auth.module.scss'
import Card from '../../components/cards/Cards'
import {MdPassword } from "react-icons/md"
import { Link } from 'react-router-dom'

const Rest = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <MdPassword  size={35} color="#999" />
                </div>
                <h2>Forgot Password</h2>
            <form>
              <input type="text" placeholder='New Password' required name='New Password'/>
              <input type="text" placeholder='Confirm New Password' required name='Confirm New Password'/>
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