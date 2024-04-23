import { useState } from "react"
import classes from "./ServiceItem.module.scss"
export default function ServiceItem({ children, icons }) {
    const [isActivated, setIsActivated] = useState(false)

    let mouseEnterHandler = () => {
        setIsActivated(!isActivated)
    }

    let mouseLeaveHandler = () => {
        setIsActivated(!isActivated)
    }

    return (
        <div className={classes["faq-wrapper"]}
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