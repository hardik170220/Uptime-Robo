import React, { useState } from 'react'
import './Login.css'
import crossIcon from '../../assets/cross_icon.png'
const Login = ({setShowLogin}) => {

const [currState , setCurrState] = useState("Sign Up");

  return (
    
    <div className="login-popup">
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={crossIcon} alt="" />
            </div>
            <div className="login-popup-inputs">
                
               {currState==="Login"?<></>: <input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuimg, i agree to terms of use & privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>click here</span></p>
            :<p onClick={()=>setCurrState("Login")}>Already have an account</p>}
            
        </form>
    </div>

  )
}

export default Login