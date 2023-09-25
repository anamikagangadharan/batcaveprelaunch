import React, { useState } from 'react'
import css from "./Register.module.css"

const Register = () => {
    const [state,setState]=useState(1)
  return (
    <div className={css.container}>
        <div className={css.wrap}>
            <div className={css.left}>
                 <div className={css.videobox}>

                 </div>
            </div>

            <div className={css.right}>
                <div className={css.rotate}>
                <div className={css.set}>
                    <span onClick={()=>setState(1)}>Personal Details</span>
                    <div className={css.line}></div>
                </div>
                <div className={css.set}>
                    <span onClick={()=>setState(2)}>Car Details</span>
                    <div className={css.line}></div>
                </div>
                </div>

               <div className={css.formdiv}>
          {state===1 &&    <form className={css.form1} action="">

                </form> }

          {state===2 &&   <form className={css.form2} action="">

               </form> }
               </div>

            </div>

        </div>
      
    </div>
  )
}

export default Register
