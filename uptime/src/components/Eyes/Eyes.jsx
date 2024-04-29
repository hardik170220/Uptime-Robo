import React, { useEffect, useState } from 'react'
import "./Eyes.css"




const Eyes = () => {

    const[rotate,setRotate] = useState(0);

useEffect(()=>{

    window.addEventListener("mousemove",(e)=>{
        // console.log(e.clientX)
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX-window.innerWidth/2;
        let deltaY = mouseY-window.innerHeight/2;

        var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
        // console.log(180-angle)
        setRotate(angle-180);
     })
})





  return (
    <div className='eyes'>
        
            <div className="eye-container">
            <div className="eye">
                <div className="inner-eye">
                    <div className="line" style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}>
                        <div className="eyedot">

                        </div>
                    </div>
                </div>
            </div>
             <div className="eye">
                <div className="inner-eye">
                    <div className="line" style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}>
                        <div className="eyedot">
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    
  )
}

export default Eyes