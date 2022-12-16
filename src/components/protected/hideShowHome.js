import { useSelector } from 'react-redux'
import { selectLogIn } from '../../Redux/feature/auth/authSlice'


export const WhenLogedIn = ({children}) => {
    const isLoggedIn = useSelector(selectLogIn)
    if(isLoggedIn)
    {return <>{children} </>}
    return null
  
}
export const WhenLogedOut = ({children}) => {
    const isLoggedIn = useSelector(selectLogIn)
    if(!isLoggedIn)
    {return <>{children} </>}
    return null
}

