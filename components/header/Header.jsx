import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from './header.module.scss'

const Header = () => {
    const [id,setId] = useState("")
    useEffect(()=>{
        if(localStorage.getItem("userId")){
            setId(localStorage.getItem("userId"))
        }
    },[])
    console.log(id);
    return (
        <div className={style.header}>
            <h2>Workers</h2>
            <ul>
                <Link href={"/"} passHref>
                    <li>Home</li>
                </Link>
                <Link href={"/workers"} passHref>
                    <li>hire a worker</li>
                </Link>
                <Link href={"/mechines"} passHref>
                    <li>rent a mechine</li>
                </Link>
                <Link href={`/dashboard/${id}`} passHref>
                    <li>Dashboard</li>
                </Link>
                <Link href={"/login"} passHref>
                    <li>login</li>
                </Link>

            </ul>

        </div>
    )
}

export default Header