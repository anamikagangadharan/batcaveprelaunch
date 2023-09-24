import React from 'react'
import css from "./Cards.module.css"


import Card1 from "../../assets/card1.svg"
import Blur from "../../assets/blur-blue.svg"

const Cards = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <span>Early bird</span>
            <span>Coming soon</span>
        </div>
        <div className={css.div2}>
            <span>Batcave</span>
            
        </div>
        <div className={css.div3}>
            <img src={Blur} alt="" />
        <img src={Card1} alt="" />

        </div>
      
    </div>
  )
}

export default Cards
