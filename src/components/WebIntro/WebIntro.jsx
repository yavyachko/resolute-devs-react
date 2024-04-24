import VerticalBar from "../../assets/icons/VerticalBar"
import HorizontalBar from "../../assets/icons/HorizontalBar"
import TelegramIcon from "../../assets/icons/TelegramIcon"
import InstagramIcon from "../../assets/icons/InstagramIcon"
import LinkedInIcon from "../../assets/icons/LinkedInIcon"

import classes from "./WebIntro.module.scss"
import { useRef, useEffect } from "react"
import "./WebIntro.module.scss"

export default function WebIntro() {
    const itemRef = useRef(null)
    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            itemRef.current.classList.add(classes.animated);
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
        
        <div className={classes.heading}>
            <div className={classes.social}>
                <a href="#"><TelegramIcon/></a>
                <a href="#"><InstagramIcon/></a>
                <a href="#"><LinkedInIcon/></a>
            </div>
            <div className={classes['heading--left']}>
                <p ref={itemRef}>LET US BUILD <span>YOUR DREAM</span></p>
                <VerticalBar />
            </div>
            <div className={classes["heading--right"]}>
                <h1>
                    WEB &amp; SOFTWARE
                    DEVELOPMENT
                </h1>
                <HorizontalBar width="100" />
                <p>
                    “Resolute devs” - is a team of professionals specializing in creating
                    web applications with maximum speed and quality.
                    <br/><br/>
                    We offer a full
                    range of services for the development, maintenance, promotion of
                    websites and software.
                </p>
            </div>
        </div>
    )
}