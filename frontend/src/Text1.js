import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Text1 = () => {
  const [texts, setTexts] = useState([
    "Welcome to My Portfolio!",
    "I love to do Web Development .",
    "I have solved 900 plus problems on leetcode and rating 1750.",
    "I have my interest toward machine learning and deep learning."
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(2000);

  const sliderRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, speed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, texts.length]);
  

  const handleSpeedChange = (e) => {
    setSpeed(parseInt(e.target.value));
  };



 

  const getSlideAnimation = () => {
   
      return "translate-x-full";
   
  };

  return (
    
    <div
  ref={sliderRef}
  className="relative h-48 w-15 mb-6 overflow-hidden"
  role="region"
  aria-label="Text Slider"
>
  {texts.map((text, index) => (
    <div
      key={index}
      className={`absolute inset-0 flex items-center justify-center p-4 transition-transform duration-500 ${
        index === currentIndex
          ? "translate-x-0"
          : index > currentIndex
          ? "translate-x-full"
          : "-translate-x-full"
      }`}
    >
     
       
        <p class="text-white text-4xl font-semibold custom-glow-text"> {text}</p>

{/* <style>
  .custom-glow-text {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.8);
  }
</style>  */}
      
    </div>
  ))}
</div>

  
        
      

    
   
   
  );
};

export default Text1;