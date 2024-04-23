import React from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";

import "./Portfolio.scss";
export default function PortfolioItem({
  heading,
  children,
  image,
  year,
  link,
}) {
  return (
    <a href={link} target="blank">
      <div className="portfolioItem">
        <div className="portfolioItem__imgWrapper">
          <div className="portfolioItem__visit">
            Visit website<ArrowIcon />
          </div>
          <img src={image} alt="porfolio site" />
        </div>
        <div className="portfolioItem__descriptionText">
          <h3>{heading}</h3>
          <p>
            {children}
            <span className="portfolioItem__descriptionYear">
              <div className="blur"></div>
              {year}
            </span>
          </p>
        </div>
      </div>
    </a>
  );
}
