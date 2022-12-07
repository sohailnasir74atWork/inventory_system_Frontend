import styles from '../auth/auth.scss'
import Card from '../../components/cards/Cards'
import {BiLogIn} from "react-icons/bi"

const Login = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
            <div className='--flex-center'>
                <BiLogIn size={35} color="#999" />
                <h2>Log In</h2>
            </div>
            
        </div>
        </Card>
    </div>
  )
}

export default Login