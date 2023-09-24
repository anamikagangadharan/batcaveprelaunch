import React from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo-bat.svg"
import Insta from "../../assets/instagram.svg"

const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.left}>
            <img src={Logo} alt="" />
            
        </div>

        <div className={css.right}>
            <span>REGISTER</span>
            <img src={Insta} alt="" />

        </div>
      
    </div>
  )
}

export default Header
