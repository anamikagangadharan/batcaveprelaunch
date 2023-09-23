import React from 'react'
import css from "./Main.module.css"
import Batcave from "../../assets/batcavetext.svg"

const Main = () => {
  return (
    <div className={css.container}>
        {/* <span className={css.bt}>batcave</span> */}
        <div className={css.wrap}>
        <div className={css.div1}>
            <img src={Batcave} alt="" />
        </div>

        </div>
      
    </div>
  )
}

export default Main

