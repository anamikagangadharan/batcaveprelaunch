import React, { useState, useEffect } from 'react';
import css from "./Carousel.module.css"
import Image1 from "../../assets/blur-blue.svg"
import Image2 from "../../assets/card with shadow-2.svg"
import Image3 from "../../assets/logo-bat.svg"

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your content, images, and spans here
  const content = [
    { text: 'Content 1', image: Image1},
    { text: 'Content 2', image: Image2 },
    { text: 'Content 3', image: Image3 },
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
    }, 1000); // Change content every 5 seconds
  
    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);
  
  return (
    <div className={css.carousel}>
      <div className={css.content}>
        {/* Render the current content, image, and span here */}
        <div className={css.image}>
          <img src={content[currentIndex].image} alt="Content" />
        </div>
        <div className={css.text}>
          <span>{content[currentIndex].text}</span>
        </div>
      </div>
      {/* Add pagination buttons here */}
      <div className={css.pagination}>
        {content.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? css.active : ''}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
      {/* Add Next and Previous buttons */}
      <button className={css.prev} onClick={handlePrev}>
        Previous
      </button>
      <button className={css.next} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
