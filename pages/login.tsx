import Link from 'next/link';
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

  const handleLogin = (event:any) => {
    event.preventDefault();
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    if(registerData.name !== "" && registerData.password !== ""){
      fetch(`${BASE_URL}auth/login`,{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(registerData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        localStorage.setItem('token',data.token)
      })
      .catch(err => console.log(err))
    }
  }
  return (
    <div className={style.container}>
      <form className={style.regForm} onSubmit={handleLogin}>
          <h1 className={style.regTitle}>Login to your account</h1>
          <div className={style.regContentWrapper}>
            <label className={style.label} htmlFor="name">Name</label>
            <input className={style.textInput} type="text" name='name' onChange={(event) => setRegisterData({...registerData,[event.target.name]:event.target.value})} id="name"/>

            <label className={style.label} htmlFor="password">Password</label>
            <input className={style.textInput} type="password" ref={passwordRef} onChange={handlePassword} name="password" id="password" />
            <div className={style.showPasswordWrapper}>
              <input type="checkbox" onClick={showPassword}  name='show-password' id='show-password' />
              <label htmlFor="show-password" className={style.showPasswordLabel}>Show password</label>
            </div>
          </div>
          <button className={style.btnPrimary}>Login</button>
          <Link href={'/signup'}>Don't have an account? Signup</Link>
      </form>
    </div>
  )
}
