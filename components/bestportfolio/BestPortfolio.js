import React from "react";
import {
  bestPortfolioSection,
  cards,
} from "./BestPortfolio.module.css";
import Card from './Card'
import PortfolioImage1 from "../../public/img/Portfolio/image1.png";
import PortfolioImage2 from "../../public/img/Portfolio/image2.png";
import PortfolioImage3 from "../../public/img/Portfolio/image3.png";

const BestPortfolio = () => {
  return (
    <div className={bestPortfolioSection}>
      <h1>Checkout The Best Portfolios Here</h1>
      <div className={cards}>
          <Card image={PortfolioImage1}/>
          <Card image={PortfolioImage2}/>
          <Card image={PortfolioImage3}/>
      </div>
    </div>
  );
};

export default BestPortfolio;
