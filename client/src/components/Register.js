import React, { useState } from 'react'

function Register() {

    const[usernameReg, setUsernameReg] = useState('')
    const[passwordReg, setpasswordReg] = useState('')

  return (
    <div className='registration'>
    <h1> Registration </h1>
    <label> Username </label>
    <input
        type="text"
        onChange={(e)=> {
            setUsernameReg(e.taget.value);
    }}
    />
    <br />
    <label> Password </label>
    <input
        type="text"
        onChange={(e)=> {
            setpasswordReg(e.taget.value);
    }}
    />
    <br />
    <button> Register </button>
    </div>
  )
}

export default Register