import React, { useState } from 'react'
import css from "./Checkout.module.css"

import Tick from "../../assets/Tick.svg";
import Hclose from '../../assets/close-hexagon.svg'
import { motion } from 'framer-motion';


const Checkout = () => {

    const [opened,setOpened]=useState(false)
    const [sopened,setsOpened]=useState(false)
  return (
    <div className={css.container}>

       <div className={css.wrap}>

        <div className={css.left}>
          
          <div className={css.line}>
            <span>MEMBERSHIP</span>
            <span>BATCAVE OGs</span>
          </div>
          <div className={css.line}>
            <span>COST</span>
            <span>₹ 15,000</span>
          </div>

          <div className={css.checkoutform}>
          <div className={css.inputset}>
                  <input className={css.contactinp} type="text" required placeholder="Full Name" />
                  <div className={css.inputline}></div>
        </div>
          <div className={css.inputset}>
                  <input className={css.contactinp} type="text" required placeholder="Mobile" />
                  <div className={css.inputline}></div>
        </div>
          <div className={css.inputset}>
                  <input className={css.contactinp} type="text" required placeholder="Shipping address" />
                  <div className={css.inputline}></div>
               <div className={css.checkboxdiv}> <input className={css.check} type="checkbox"  />
                  <label className={css.shippinglabel} htmlFor="">My shipping address same as my residential address</label>
                  </div>  

  <div className={css.inputset}>
                  <div className={css.applydiv}>
                    <input className={css.contactinp} type="text" placeholder='apply coupon' />
                    <img src={Tick} alt="" />
                  </div>
                  <div className={css.inputline}></div>

                  </div>
        </div>


          </div>

        </div>



        <div className={css.right}>

            <span className={css.checkoutspan}>Checkout summary</span>

            <div className={css.line}>
                <span>membership cost</span>
                <span>₹ 15,000</span>
            </div>
            <div className={css.line}>
                <span>standard discount</span>
                <span>-₹ 3,000</span>
            </div>
            <div className={css.line}>
                <span>coupon</span>
                <span>-₹ 2,000</span>
            </div>
            <div className={css.plainline}></div>

            <div className={css.gtotal}>
                <span>grand total</span>
                <span>₹ 10,000</span>
            </div>

            <span className={css.agreespan}>by clicking, I AGREE WITH THE <span onClick={()=>setOpened(!opened)} className={css.spaninside}>refund policy </span> &  <span onClick={()=>setsOpened(!opened)} className={css.spaninside}>shipping policy </span></span>

            <button className={css.proceedbtn}>PROCEED TO PAY</button>





        </div>

       </div>

       {/* refund policy popup */}
     {opened && <motion.div 
     initial={{opacity:0,x:130}}
     whileInView={{opacity:1, x:0}}
     transition={{duration:1.5}}
     className={css.refund} >
        <div className={css.head}>
            <span>Refund policy</span>
            <img onClick={()=>setOpened(false)} src={Hclose} alt="" />
        </div>

        <div className={css.content}>
            <span className={css.rhead}>Effective Date: 10-10-2023</span> 
            <span className={css.rhead}>Membership Refunds:</span>

            <span className={css.rcontent}>At Batcave OGs, we value your membership and your commitment to our community of car enthusiasts. However, please note that all membership fees are non-refundable. We do not offer refunds for membership payments under any circumstances.</span>
        
         <span className={css.rhead}>Event Registration Refunds:</span>
         <span className={css.rcontent}>For events and activities organised by Batcave OGs, event registration fees may be eligible for refunds, subject to the following conditions:</span>
        

        <span className={css.rcontent1}>- Full Refund: Cancellations made 3 days or more before the event start date.</span>
        <span className={css.rcontent1}>- Partial Refund: Cancellations made within 3 days before the event start date, subject to a 40% cancellation fee.</span>
        <span className={css.rcontent1}>- No Refund: Cancellations made on or after the event start date.</span>


        <span className={css.rhead}>Refund Process:</span>

        <span className={css.rcontent}>To request a refund for an event or activity, please contact us at refunds@batcave.co.in. Refunds will be processed within 5-7 business days, and the amount refunded will be based on the above refund policy conditions.</span>
       
       <span className={css.rhead}>Contact Us:</span>
       <span className={css.rcontent}>If you have any questions or concerns about our refund policy, please contact us at support@batcave.co.in.</span>
        </div>





       </motion.div> }



       {/* shipping policy */}

       {sopened && <motion.div 
     initial={{opacity:0,x:130}}
     whileInView={{opacity:1, x:0}}
     transition={{duration:1.5}}
     className={css.shipping} >
        <div className={css.head}>
            <span>Shipping policy</span>
            <img onClick={()=>setsOpened(false)} src={Hclose} alt="" />
        </div>

        <div className={css.content}>
       <span className={css.shead}> Effective Date: 10-10-2023 </span> 

<span className={css.shead}>  1. Shipping Information:  </span>

<span className={css.scontent}>Batcave OGs ("Club") offers shipping services for specific products, merchandise, or promotional items. Shipping may be available to locations within [list the specific regions or countries where you offer shipping]. </span>

<span className={css.shead}> 2. Shipping Methods: </span>


<span className={css.scontent1}> We offer the following shipping methods:  </span>
 <span className={css.scontent1}> - Standard Shipping: Estimated delivery time 7-14 Business Days.</span>
 <span className={css.scontent1}> - Express Shipping: Estimated delivery time 4-7 Business Days.</span>

 <span className={css.shead}>3. Order Processing:</span>

<span className={css.scontent1}> - Orders are typically processed and shipped within 7-10 business days.</span>
 <span className={css.scontent1}> - You will receive a confirmation email with tracking information once your order has shipped.</span>

 <span className={css.shead}>4. Shipping Costs:</span>

 <span className={css.scontent1}> Shipping costs are calculated based on the weight, dimensions, and destination of your order. The exact shipping cost will be displayed during the checkout process.</span>

 <span className={css.shead}>5. Delivery Times:</span>

<span className={css.scontent1}> Delivery times may vary depending on the shipping method selected and the destination. Estimated delivery times are provided for each shipping method, but please note that these are approximate and not guaranteed. </span>

 <span className={css.shead}>6. International Shipping:</span>
 <span className={css.scontent1}>For international orders, please be aware of any import duties, taxes, or customs fees that may be applicable in your country. These fees are the responsibility of the recipient. </span>


 <span className={css.shead}>7. Lost or Damaged Shipments:</span>
 <span className={css.scontent1}> In the event of a lost or damaged shipment, please contact us at support@batcave.co.in as soon as possible. We will work with the shipping carrier to resolve the issue. </span>


 <span className={css.shead}>8. Tracking Orders:</span>
 <span className={css.scontent1}>You can track the status of your order by using the tracking information provided in your order confirmation email. </span>


 <span className={css.shead}>9. Contact Us:</span>
 <span className={css.scontent1}> If you have any questions or concerns about our shipping policy, please contact us at support@batcave.co.in.  </span>
 
        </div>





       </motion.div> }
      
    </div>
  )
}

export default Checkout
 