import Image from "next/image";
import React from "react";
import {
  card,
  imageWraper,
  rightSection,
  imageDetails,
  leftSection,
} from "./BestPortfolio.module.css";
import ArrowImage from "../../public/img/Portfolio/arrow.png";

const Card = ({image}) => {
  return (
    <div className={card}>
      <div className={imageWraper}>
        <Image src={image} layout="fill" objectFit="cover" alt=" " />
      </div>
      <div className={imageDetails}>
        <div className={leftSection}>
          <h3>Unni Kuttan</h3>
          <p>Painter</p>
        </div>
        <div className={rightSection}>
          <Image src={ArrowImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
