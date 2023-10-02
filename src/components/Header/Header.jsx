import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/VectorBat.svg"
import { Link } from 'react-router-dom'


const Header = () => {
  const [state,setState]=useState(false) 

  const scrollDown=()=>{
    window.scrollY >= 1 ? setState(true) : setState(false);
  } 

  window.addEventListener('scroll',scrollDown)



  return (
    <div className={state? css.newcontainer: css.container}>
        <div className={css.left}>
          <Link to="/">  <img onClick={()=>window.scrollTo(0,0)} src={Logo} alt="" /> </Link> 
            
        </div>

        <div className={css.right}>
       <Link to="/register"><button  className={css.registermainbtn}>REGISTER</button> </Link>    

        </div>
      
    </div>
  )
}

export default Header
