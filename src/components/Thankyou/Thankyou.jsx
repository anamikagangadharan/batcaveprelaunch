import React from 'react'
import css from "./Thankyou.module.css"

const Thankyou = () => {
  return (
    <div className={css.container}>
        <div className={css.wrap}>
           <div className={css.div1}>
            <span>THANK YOU</span>
            <span>Your Welcome Kit is on the Way - Get Ready for an Exciting Journey with Us!</span>
           </div>

           <div className={css.div2}>
            <button className={css.btohomebtn}>BACK TO HOME</button>
            <span>Follow us on instagram to hop into our giveaway</span>
           </div>

            </div>
      
    </div>
  )
}

export default Thankyou
