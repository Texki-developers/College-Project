import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./TopBar.module.scss";

const TopBar = () => {
  return (
    <div className={style.topBar}>
      <Link href={"/"} passHref>
        <h6 style={{cursor:"pointer"}}>Back</h6>
        </Link>
      <div className={style.profile}>
        <h4>muhsin</h4>
        <div className={style.imageWraper}>
          
        </div>
      </div>
    </div>
  );
};

export default TopBar;
