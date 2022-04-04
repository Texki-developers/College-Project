import Image from "next/image";
import React from "react";
import {
  categorySection,
  cards,
  card,
  moreCategory,
  imageWraper,
} from "./Category.module.css";
import Elecrtician from "../../public/img/Category/electricianColor.png";
import Plumber from "../../public/img/Category/plumberColor.png";

const Category = () => {
  return (
    <div className={categorySection}>
      <h1>Choose Different Category </h1>
      <div className={cards}>
        <div className={card}>
          <div className={imageWraper}>
            <Image src={Elecrtician} alt="" />
          </div>
          <p>Electrician</p>
        </div>
        <div className={card}>
          <div className={imageWraper}>
            <Image src={Plumber} alt="" />
          </div>
          <p>Electrician</p>
        </div>
        <div className={card}>
          <div className={imageWraper}>
            <Image src={Elecrtician} alt="" />
          </div>
          <p>Electrician</p>
        </div>
        <div className={card}>
          <div className={imageWraper}>
            <Image src={Plumber} alt="" />
          </div>
          <p>Electrician</p>
        </div><div className={card}>
          <div className={imageWraper}>
            <Image src={Elecrtician} alt="" />
          </div>
          <p>Electrician</p>
        </div>
        <div className={card}>
          <div className={imageWraper}>
            <Image src={Plumber} alt="" />
          </div>
          <p>Electrician</p>
        </div><div className={card}>
          <div className={imageWraper}>
            <Image src={Elecrtician} alt="" />
          </div>
          <p>Electrician</p>
        </div>
        <div className={card}>
          <div className={imageWraper}>
            <Image src={Plumber} alt="" />
          </div>
          <p>Electrician</p>
        </div>
      </div>
      <div className={moreCategory}>
          More Category
      </div>
    </div>
  );
};

export default Category;
