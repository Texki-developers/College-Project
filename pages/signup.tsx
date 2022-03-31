import React, { useRef, useState } from 'react'
import style from '../styles/signup.module.scss';

export default function signup() {
  const [isPasswordError,setPasswordError] = useState(false);
  const [isCPasswordError,setCPasswordError] = useState(false);
  const [isUserNameError,setUserNameError] = useState(false)
  const cPasswordRef = useRef<HTMLInputElement>(null);
  const [registerData,setRegisterData] = useState({
    password: "",
    name:""
  });
  
  const handlePassword = (event:any) => {
    setPasswordError(false)
    if(event.target.value.length < 8){
      setPasswordError(true);
    }else{
      setRegisterData({...registerData,password:event.target.value})
    }
  }

  const handleConfirmPassword = (event:any) => {
    setCPasswordError(false);
    if(event.target.value !== registerData.password){
      setCPasswordError(true);
    }
  }

  const showPassword = (event:any) => {
    if(event.target.checked){
      cPasswordRef.current!.type = "text"; 
    }else{
      cPasswordRef.current!.type = "password"
    }
  }
  return (
    <div className={style.container}>
      <form className={style.regForm}>
          <h1 className={style.regTitle}>Register your account free</h1>
          <div className={style.regContentWrapper}>
            <label className={style.label} htmlFor="name">Name</label>
            <input className={style.textInput} type="text" id="name"/>
            {
              isUserNameError&&
              <small className={style.errorMessage}>Username not available</small>
            }

            <label className={style.label} htmlFor="password">Password</label>
            <input className={style.textInput} type="password" onChange={handlePassword} name="password" id="password" />
            {
              isPasswordError && 
              <small className={style.errorMessage} >Password must contain atleast 8 characters</small>
            }

            <label className={style.label} htmlFor="c-password">Confirm Password</label>
            <input className={style.textInput} type="password" ref={cPasswordRef} onChange={handleConfirmPassword} name='c-password' id='c-password' />
            {
              isCPasswordError &&
              <small className={style.errorMessage}>Confirm password might match password</small>
            }

            <div className={style.showPasswordWrapper}>
              <input type="checkbox" onClick={showPassword} name='show-password' id='show-password' />
              <label htmlFor="show-password">Show password</label>
            </div>
          </div>
          <button className={style.btnPrimary}>Register</button>
      </form>
    </div>
  )
}
