import React from 'react'
import  ReactDOM  from 'react-dom'
import loadingImg from "../../assets/loader.gif"
import "./Loader.scss"


const Loader = () => {
  return ReactDOM.createPortal(
    <div className='wrapper'>
        <div className='loader'>
            <img src={loadingImg} alt="Loading......"/>
        </div>

    </div>,
    document.getElementById("loading")
    
  )
}
export const SpiningImg = ()=>{
    return (
        <div className='--center-all'>
            <img src={loadingImg} alt="Loading......"/>
        </div>
    )

}

export default Loader