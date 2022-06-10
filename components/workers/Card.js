import Image from "next/image";
import React from "react";
import {
  card,
  imageWraper,
  rightSection,
  imageDetails,
  leftSection,
} from "./card.module.css";

const Card = ({image,data}) => {
  return (
    <div className={card}>
      <div className={imageWraper}>
        <Image src={image} layout="fill" objectFit="cover" alt=" " />
      </div>
      <div className={imageDetails}>
        <div className={leftSection}>
          <h3>{data.name}</h3>
          <p>{data.category}</p>
        </div>
        <div className={rightSection}>
          <h3>₹{data.rent}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
