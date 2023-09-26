import React from 'react'
import css from "./Cards.module.css"
import Card1 from "../../assets/membershipcard.svg"
import Blur from "../../assets/blur-blue.svg"
import LArrow from "../../assets/left-arrow.svg"
import RArrow from "../../assets/right-arrow.svg"

const Cards = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
           <span>membership card</span>
        </div>
        <div className={css.div2}>
            <span>BATCAVE OGs</span>
            
        </div>
        <div className={css.div3}>
          <div className={css.left}>
            <span>Presence</span>
            <div className={css.cardline}></div>
            <div className={css.cities}>
             <span> Coimbatore,Chennai,Bengaluru,Mysore,Kochi ,Trivandrum,
              Hyderabad,Visakhapatnam </span>
            </div>
          </div>


          <div className={css.middle}>
          <img src={Blur} alt="" />
        <img src={Card1} alt="" />
          </div>
          {/* <div className={css.backline}></div> */}


          <div className={css.right}>
          {/* top */}
           <div className={css.rtop}>
            <img src={LArrow} alt="" />
            <div className={css.sline}></div>
            <span>Features</span>
            <div className={css.sline}></div>
            <img src={RArrow} alt="" />

           </div>

          {/* top */}


            <div className={css.cardline}></div>
            {/* bottom */}
            <div className={css.bottomcontent}>
              <span>Exclusive Event Access: 
Get VIP entry to thrilling car meets and rides.</span>
            </div>
            {/* bottom */}
          
          </div>


         

        </div>
      
    </div>
  )
}

export default Cards
