import Link from 'next/link';
import { useRouter } from 'next/router';
import { format } from 'path';
import React, { useRef, useState } from 'react'
import style from '../styles/signup.module.scss';

export default function signup() {
  const router = useRouter()
  const [isPasswordError,setPasswordError] = useState<boolean>(false);
  const [isCPasswordError,setCPasswordError] = useState<boolean>(false);
  const [isUserNameError,setUserNameError] = useState<boolean>(false)
  const cPasswordRef = useRef<HTMLInputElement>(null);
  const [registerData,setRegisterData] = useState<{name:string,password:string}>({
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

  const handleName = (event:any) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    setRegisterData({...registerData,[event.target.name]:event.target.value});
    fetch(`${BASE_URL}auth/check/${event.target.value}`)
    .then(res => res.json())
    .then(res => {
      if(res.status === "error"){
        setUserNameError(false);
      }else if(res.status === "ok"){
        setUserNameError(true);
      }
    })
  }

  const handleRegistration = (event:any) => {
    event.preventDefault()
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    
    if(!isCPasswordError && !isCPasswordError && !isUserNameError){
      fetch(`${BASE_URL}auth/signup`,{
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        router.push('/')
      })
      .catch(err => console.log(err))
    }
  }
  return (
    <div className={style.container}>
      <form className={style.regForm} onSubmit={handleRegistration}>
          <h1 className={style.regTitle}>Register your account free</h1>
          <div className={style.regContentWrapper}>
            <label className={style.label} htmlFor="name">Name</label>
            <input className={style.textInput} type="text" name="name" onChange={handleName} id="name"/>
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
              <label htmlFor="show-password" className={style.showPasswordLabel}>Show password</label>
            </div>
          </div>
          <button className={style.btnPrimary}>Register</button>
          <Link href={'/login'}>Already have an account? Login</Link>
      </form>
    </div>
  )
}
