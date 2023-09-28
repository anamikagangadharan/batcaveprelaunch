import React from 'react'
import css from "./Footer.module.css"
import Insta from "../../assets/instagram.svg"
import Phone from "../../assets/phone.svg"
import Mail from "../../assets/mail.svg"

const Footer = () => {
  return (
    <div className={css.container}>
        <div className={css.wrap}>
        <div className={css.left}>
            <span>©batcave2023</span>

        </div>

        {/* <div className={css.middle}>hi</div> */}


        <div className={css.right}> 
            <img src={Insta} alt="" />
            <img src={Phone} alt="" />
            <img src={Mail} alt="" />

        </div>
        </div>
      
    </div>
  )
}

export default Footer
