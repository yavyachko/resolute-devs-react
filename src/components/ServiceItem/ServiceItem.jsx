import classes from "./ServiceItem.module.scss";
import { useRef, useEffect, useState } from "react";
export default function ServiceItem({ children, icons, isActivated = 0 }) {
  const itemRef = useRef(null);
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
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    if (isActivated && window.innerWidth < 1000) {
      itemRef.current.classList.add(classes.activated);
    }

    return () => {
      observer.disconnect();
    };
  }, [isActivated]);

  const [isClassChanged, setClassChanged] = useState(false);
  const handleClick = () => {
    setClassChanged(!isClassChanged);
    if (isClassChanged && window.innerWidth<1000) {
      itemRef.current.classList.add(classes.activated);
    }else if(window.innerWidth<=1000){
      itemRef.current.classList.remove(classes.activated);
    }
  };
  return (
    <div ref={itemRef} className={classes["faq-wrapper"]} onClick={handleClick}>
      <div className={classes["faq-wrapper__activator"]}>
        <div className={classes["faq-wrapper__activator__left"]}>
          <div className={classes["faq-wrapper__activator__left__dot"]}></div>
          <p>{children}</p>
        </div>
        <div className={classes["faq-wrapper__activator__icons"]}>
          {icons.map((elem) => elem)}
        </div>
      </div>
    </div>
  );
}
