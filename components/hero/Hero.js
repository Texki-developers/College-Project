import Image from "next/image";
import React from "react";
import {
  heroSection,
  leftSection,
  rightSection,
  imageContainer,
  searchIcon,
  searchBox,
  button,
  inputContainer,
} from "./Hero.module.css";
import heroImage from "../../public/img/hero/Working remotely.png";
import searchImage from "../../public/img/hero/searchIcon.png";

const Hero = () => {
  return (
    <div className={heroSection}>
      <div className={leftSection}>
        <h1>Are you looking for workers?</h1>
        <p>
          Hire Great workers, Fast. we helps you hire elite workers at a moments
          notice
        </p>
        <div className={searchBox}>
          <div className={button}>Hire a Worker</div>
          <div className={inputContainer}>
            <input type="search" />
            <div className={searchIcon}>
              <Image src={searchImage} alt="" width={15} height={15}/>
            </div>
          </div>
        </div>
      </div>
      <div className={rightSection}>
        <div className={imageContainer}>
          <Image src={heroImage} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
