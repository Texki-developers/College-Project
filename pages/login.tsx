import React, { useRef, useState } from 'react'
import style from '../styles/signup.module.scss';

export default function login() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [registerData,setRegisterData] = useState<{name:string,password:string}>({
    password: "",
    name:""
  });

  const handlePassword = (event:any) => {
      setRegisterData({...registerData,password:event.target.value})
  }

  const showPassword = (event:any) => {
    if(event.target.checked){
      passwordRef.current!.type = "text"; 
    }else{
      passwordRef.current!.type = "password"
    }
  }
  return (
    <div className={style.container}>
      <form className={style.regForm}>
          <h1 className={style.regTitle}>Login to your account</h1>
          <div className={style.regContentWrapper}>
            <label className={style.label} htmlFor="name">Name</label>
            <input className={style.textInput} type="text" id="name"/>

            <label className={style.label} htmlFor="password">Password</label>
            <input className={style.textInput} type="password" ref={passwordRef} onChange={handlePassword} name="password" id="password" />
            <div className={style.showPasswordWrapper}>
              <input type="checkbox" onClick={showPassword}  name='show-password' id='show-password' />
              <label htmlFor="show-password">Show password</label>
            </div>
          </div>
          <button className={style.btnPrimary}>Login</button>
      </form>
    </div>
  )
}