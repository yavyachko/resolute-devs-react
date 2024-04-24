import { useState } from "react"
import classes from "./ServiceItem.module.scss"
import { useRef, useEffect } from "react"
export default function ServiceItem({ children, icons }) {

    const [isActivated, setIsActivated] = useState(false)

    let mouseEnterHandler = () => {
        setIsActivated(!isActivated)
    }

    let mouseLeaveHandler = () => {
        setIsActivated(!isActivated)
    }

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
          threshold: 0.5, 
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
        <div ref={itemRef} className={classes["faq-wrapper"]}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            <div className={classes["faq-wrapper__activator"]}>
                <div className={classes["faq-wrapper__activator__left"]}>
                    <div className={classes["faq-wrapper__activator__left__dot"]}></div>
                    <p>{children}</p>
                </div>
                <div className={classes["faq-wrapper__activator__icons"]}>
                        {icons.map(elem => elem)
                        }
                </div>
            </div>
        </div>
    )
}