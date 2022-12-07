import React from 'react'
import {RiProductHuntLine} from "react-icons/ri"
import { Link } from 'react-router-dom'
import "./home.scss"
import heroImg from "../../assets/inv-img.png"

const Home = () => {
  return (
    <div className='home'>
        <nav className="container --flex-between">
            <div className='logo'>
                <RiProductHuntLine size={35}/>
            </div>
            <ul className='home-links'>
                <li>
                    <Link to={"/register"}>Register</Link>
                </li>
                <li>
                    <button className='--btn --btn-primary'>
                    <Link to={"/dashboard"}>Dashboard</Link>
                    </button>
                </li>
                <li>
                    <button className='--btn --btn-primary'>
                    <Link to={"/login"}>Login</Link>
                    </button>
                </li>
            </ul>
            
        </nav>
{/////////////////////hero section////////////////////////////////
}
            <section className='container hero'>
                <div className='hero-text'>
                    <h1>Inventory & Stock
                        Management
                        Solution</h1>
                <p>Inventory system to control and manage proucts in the warehouse in real timeand integrated to make it easier to develop your business.</p>
                <div className='hero-buttons'>
                <button className='--btn --btn-secondary'>
                    <Link to={"/dashboard"}>Free Trial 1 Month</Link>
                </button>
                </div>
                <div className='--flex-start'>
                <NunmberText num="12K" text="Brand Owners"/>
                <NunmberText num="23K" text="Active Users"/>
                <NunmberText num="500+" text="Devices"/>
                </div>
                
                </div>
                <div className='hero-image'>
               <img src={heroImg} alt="Inventory">
               </img>
                </div>
                
                
                
               
                
            </section>
    </div>
  )
}


const NunmberText = ({num, text})=>{
    return (<div className='--mr'>
        <h3 className='--color-white'>{num}</h3>
        <p className='--color-white'>{text}</p>
        </div>
    )
}


export default Home