import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowLogin}) => {

    const[currState,setCurrState] =useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==='Login'?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account now":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>By continuing , i agree to the terms of use and privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new Account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have a account?<span onClick={()=>setCurrState("Login")} >Login Here</span></p>
  }
      </form>
    </div>
  )
}

export default LoginPopup
