import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className=' loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Enter Name'></input>
          <input type="email" placeholder='Enter Email'></input>
          <input type="password" placeholder='Enter Password'></input>
        </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>

          <div className = 'loginsignup-agree'>
            <input type="checkbox" name = '' id = ''/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignUp