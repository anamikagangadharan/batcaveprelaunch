import React, { useState, useEffect } from "react";
import css from "./Gift.module.css";
import Gift1 from "../../assets/gift1.png";
import Gift2 from "../../assets/gift2.png";
import Gift3 from "../../assets/gift3.png";
const Gift = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your content, images, and spans here
  const content = [
    {
      text: "Mahindra Thar",
      text2: "Diesel, 117 BHP 300NM for",
      text3: "2 lucky members",
      image: Gift1,
    },
    {
      text: "MSI Stealth 16 Mercedes-AMG",
      text2: "MSI AMG Stealth 16 Laptops for",
      text3: "5 lucky members",
      image: Gift2,
    },
    {
      text: "All-expenses-paid BMW Museum tri",
      text2: "Munich, Germany, for ",
      text3: "10 lucky members",
      image: Gift3,
    },
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
          <img
            className={css.imgauto}
            src={content[currentIndex].image}
            alt=""
          />
          {/* <img src={Gift1} alt="" /> */}
        </div>

        <div className={css.div3}>

          <div className={css.leftmiddlewrap}>
          <div className={css.left}>
            <span>{content[currentIndex].text}</span>
            <span>{content[currentIndex].text2}</span>
            <span>{content[currentIndex].text3}</span>
          </div>

          {/* <span>Heading</span>
        <span>This is the description of the car</span> */}

          <div className={css.middle}>
            <span>GIVEAWAY PRICES</span>

            <div className={css.pagination}>
              {content.map((_, index) => (
                <React.Fragment key={index}>
                  <svg
                    className={index === currentIndex ? css.active : ""}
                    onClick={() => handlePaginationClick(index)}
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 33773">
                      <circle
                        id="Ellipse 10"
                        cx="7"
                        cy="6.5"
                        r="6.25"
                        stroke="#666666"
                        stroke-width="0.5"
                      />
                      <circle
                        id="Ellipse 9"
                        cx="7"
                        cy="6.5"
                        r="3.5"
                        fill="#666666"
                      />
                    </g>
                  </svg>
                  {index < content.length - 1 && (
                    <div className={css.linebtw}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

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
  );
};

export default Gift;
