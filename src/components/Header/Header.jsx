import React from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/VectorBat.svg"


const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.left}>
            <img src={Logo} alt="" />
            
        </div>

        <div className={css.right}>
           <button className={css.registermainbtn}>REGISTER</button>

        </div>
      
    </div>
  )
}

export default Header
