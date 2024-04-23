import LogoIcon from "../../assets/icons/LogoIcon";
import classes from "./Header.module.scss";
import BurgrerIcon from "../../assets/icons/BurgerIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import TelegramIcon from "../../assets/icons/TelegramIcon";
import CrossIcon from '../../assets/icons/CrossIcon'
import { useState } from "react";

export default function Header({
  servicesRef,
  benefitsRef,
  progressbarRef,
  portfolioRef,
  contactRef,
}) {

  const [burgerVisibility, setBurgerVisibility] = useState(false);

  const handleBurger = () =>{
    setBurgerVisibility(!burgerVisibility);
  }

  const handleNavigation = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={classes.background}>
      <div className={classes.wrapper}>
        <div
          className={classes.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <LogoIcon />
        </div>
        <nav className={classes.navbar}>
          <ul>
            <li onClick={() => handleNavigation(servicesRef)}>Services</li>
            <li onClick={() => handleNavigation(benefitsRef)}>Benefits</li>
            <li onClick={() => handleNavigation(progressbarRef)}>
              How we work
            </li>
            <li onClick={() => handleNavigation(portfolioRef)}>Portfolio</li>
            <li onClick={() => handleNavigation(contactRef)}>Contact</li>
          </ul>
          <div className={classes.burger} onClick={()=>handleBurger()}>
            <BurgrerIcon />
            <nav className={ !burgerVisibility ? classes.burgerNavbar : classes.burgerNavbarActive}>
              <ul>
                <li onClick={() => handleNavigation(servicesRef)}>Services</li>
                <li onClick={() => handleNavigation(benefitsRef)}>Benefits</li>
                <li onClick={() => handleNavigation(progressbarRef)}>
                  How we work
                </li>
                <li onClick={() => handleNavigation(portfolioRef)}>
                  Portfolio
                </li>
                <li onClick={() => handleNavigation(contactRef)}>Contact</li>
                <li>
                  <div className={classes.social}>
                    <a href="#main">
                      <TelegramIcon />
                    </a>
                    <a href="#main">
                      <InstagramIcon />
                    </a>
                    <a href="#main">
                      <LinkedInIcon />
                    </a>
                  </div>
                </li>
              </ul>
              <div className={classes.cross}><CrossIcon /></div>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
}
