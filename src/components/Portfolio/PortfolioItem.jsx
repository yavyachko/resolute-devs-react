import React from "react";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { useEffect, useRef } from "react";
import "./Portfolio.scss";
export default function PortfolioItem({
  heading,
  children,
  image,
  year,
  link,
}) {

  const itemRef = useRef(null)
    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            itemRef.current.classList.add("animated");
          }
        });
      };
    
      useEffect(() => {
        const options = {
          root: null, 
          rootMargin: '0px',
          threshold: 0.3, 
        };
    
        const observer = new IntersectionObserver(handleIntersection, options);
    
        if (itemRef.current) {
          observer.observe(itemRef.current);
        }
    
        return () => {
          observer.disconnect();
        };
      }, []);


  return (
    <a href={link} target="blank">
      <div ref={itemRef} className="portfolioItem">
        <div className="portfolioItem__imgWrapper">
          <div className="portfolioItem__visit">
            Visit website<ArrowIcon />
          </div>
          <img src={image} alt="porfolio site" />
        </div>
        <div className="portfolioItem__descriptionText">
          <h3>{heading}<ArrowIcon /></h3>
          <p>
            {children}
            <span className="portfolioItem__descriptionYear">
              <span className="blur"></span>
              {year}
            </span>
          </p>
        </div>
      </div>
    </a>
  );
}
