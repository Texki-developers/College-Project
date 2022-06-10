import style from "./Sidebar.module.scss";
import React from "react";
import Link from "next/link";


const items = ({ name, src, color, link, active }) => {
  return (
    <>
      <Link href={link} passHref>
        <li style={{ background:active?"#ffffff7a":"" }} className={style.item}>
          <div className={style.imageWraper}>
          </div>
          <p>{name}</p>
        </li>
      </Link>
    </>
  );
};

export default items;
