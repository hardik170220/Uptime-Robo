import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Assuming you have a CSS file for 
import PhoneImg from "../HomePage/phone.png"
import { motion } from "framer-motion"

function HomePage() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };


//  const[top,setTop] = useState(0)
//  const[left,setLeft] = useState(0)

//  useEffect((e)=>{
//   window.addEventListener("mouseover",(e)=>{
//     let X = e.pageX ;
//     let Y = e.pageY ;

//     setTop(Y);
//     setLeft(X);
//   })

//  })
  
  return (
    <div className="HomePage" onMouseMove={handleMouseMove}>
      <div className="luminous-circle" style={{ left: cursorPosition.x, top: cursorPosition.y }} />
      <div className="text-section">
        <motion.h1
        initial={{y:-1000}}
         animate={{ y:0 }}
         transition={{ ease: "easeOut", duration: 1,delay:1}}>
            
          The world's leading <span className='green-font'>uptime m<div className='logohome'><div className='innerlogohome'></div></div>nit<div className='logohome'><div className='innerlogohome'></div></div>ring</span> service.</motion.h1>
       
        <motion.p
         initial={{opacity:0}}
         animate={{ opacity:1}}
         transition={{ ease: "easeOut", duration:2,delay:1 }}>
          Get 50 monitors with 5-minute checks<span className='green-font'> totally FREE.</span></motion.p>
        <button className='btn'>Start Monitoring in 30 Seconds </button>
      </div>
      <motion.div className="image-section">
        <img src={PhoneImg} alt="Your Image" />
      </motion.div>
    </div>
    
  );
}

export default HomePage;
