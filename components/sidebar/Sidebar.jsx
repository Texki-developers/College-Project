import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Item from "./items";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const [route, setRoute] = useState("")
  const router = useRouter()
  useEffect(()=>{
    if(router.route.split("/").includes('createadforworkers')){
      setRoute("/createadforworkers")
    }else if(router.route.split("/").includes('createadformechine')){
      setRoute("/createadformechine")
    }else{
      setRoute("/dashboard")
    }
  },[])
  return (
    <div className={style.sidebar}>
      <ul className={style.itemsWraper}>
        <Item active={route==="/dashboard"}  link="/dashboard"  name="Dashboard" color="#6100FF"/>
        <Item active={route==="/createadforworkers"} link="/createadforworkers"  name="Add Worker" color="#FF9900"/>
        <Item active={route==="/createadformechine"} link="/createadformechine"  name="Add Mechine" color="#00D1FF"/>
      </ul>
    </div>
  );
};

export default Sidebar;
