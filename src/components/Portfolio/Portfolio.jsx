import React from "react";
import "./Portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import KovivaImg from "../../assets/img/PortfolioKoviva.png";
import OfficesImg from "../../assets/img/PortfolioOfifces.png";
import StandupImg from "../../assets/img/PortfolioStandup.png";

export default function Portfolio({sectionRef}) {
  return (
    <section ref={sectionRef} className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio__content">
        <div className="portfolio__content_left">
          <div className="portfolio__describe">
            <h3>
              The artwork is the{" "}
              <span>
                <span className="blur"></span>face
              </span>{" "}
              of the team
            </h3>
            <p>
              We are proud of our diverse portfolio, representing a wide range
              of innovative solutions and successful projects we have
              implemented for our clients. Our experience spans a variety of
              industries including finance, healthcare, education, retail, and
              more.
            </p>
          </div>
          <PortfolioItem
            heading="Koviva, website"
            year="2024"
            image={KovivaImg}
            link="https://www.koviva.pl/"
          >
            Logistics services website
          </PortfolioItem>
          <PortfolioItem
            heading="o1propertie, website"
            year="2023"
            image={OfficesImg}
            link="https://arenda.o1properties.ru/"
          >
            A platform for renting offices from the owner
          </PortfolioItem>
        </div>
        <div className="portfolio__content_right">
          <div className="portfolio__describe">
            <h3>
              The artwork is the{" "}
              <span>
                <span className="blur"></span>face
              </span>{" "}
              of the team
            </h3>
            <p>
              We are proud of our diverse portfolio, representing a wide range
              of innovative solutions and successful projects we have
              implemented for our clients. Our experience spans a variety of
              industries including finance, healthcare, education, retail, and
              more.
            </p>
          </div>
          <PortfolioItem
            heading="Glavstandup, website"
            year="2024"
            image={StandupImg}
            link="https://glavstandup.ru/"
          >
            Stand-up ticket sales platform
          </PortfolioItem>
          <div className="coming-soon">
            <h2>Coming soon!</h2>
            <p>The project is under development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
