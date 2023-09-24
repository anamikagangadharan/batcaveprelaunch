import React from 'react'
import css from "./Cards.module.css"

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
      
    </div>
  )
}

export default Cards
