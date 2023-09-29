import React from 'react'
import css from "./RegistrationClosed.module.css"
import { Link } from 'react-router-dom'

const RegistrationClosed = () => {
  return (
    <div className={css.container}>
    <div className={css.wrap}>
       <div className={css.div1}>
        <span>registration closed</span>
        <span>Your Welcome Kit is on the Way - Get Ready for an Exciting Journey with Us!</span>
       </div>

       <div className={css.div2}>
      <Link to ="/"><button className={css.btohomebtn}>BACK TO HOME</button></Link>  
        <span>Follow us on instagram to hop into our giveaway</span>
       </div>

        </div>
  
</div>
  )
}

export default RegistrationClosed
