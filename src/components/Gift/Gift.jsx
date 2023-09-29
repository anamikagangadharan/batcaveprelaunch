import React, { useState ,useEffect} from 'react'
import css from "./Gift.module.css"
import Gift1 from "../../assets/gift1.png"
import Gift2 from "../../assets/gift2.png"
import Gift3 from "../../assets/gift3.png"
const Gift = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    // Define your content, images, and spans here
    const content = [
      { text: 'Content 1', image: Gift1},
      { text: 'Content 2', image: Gift2 },
      { text: 'Content 3', image: Gift3 },
    ];
  
 const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };
  
  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000); // Change content every 5 seconds
  
    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);



  return (

  
    <div className={css.container}>
        <div className={css.wrap}>
            <div className={css.div1}>
                <span>JOIN BATCAVE OGs AND WIN BIG!</span>
            </div>

            <div className={css.div2}>
                <img src={content[currentIndex].image} alt="" />

            </div>

            <div className={css.div3}>
                <div className={css.left}>
  
        <span>Heading</span>
        <span>This is the description of the car</span>

                </div>



                <div className={css.middle}>
 <span>GIVEAWAY PRICES</span>

                </div>



                <div className={css.right}>
             <span>How to Enter?</span>
                    <span className={css.rspan}>1. Be a Batcave OG</span>
                     <span className={css.rspan}>2. Follow us on Instagram</span>
                     <span className={css.rspan}>3. Post a story, tag us</span>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Gift
