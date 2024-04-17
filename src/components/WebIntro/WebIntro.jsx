import VerticalBar from "../../assets/icons/VerticalBar"
import HorizontalBar from "../../assets/icons/HorizontalBar"
import classes from "./WebIntro.module.css"
import "./WebIntro.module.css"

export default function WebIntro() {
    return (
        <div className={classes.heading}>
            <div className={classes['heading--left']}>
                <p>LET US BUILD <span>YOUR DREAM</span></p>
                <VerticalBar />
            </div>
            <div className={classes["heading--right"]}>
                <h1>
                    WEB &amp; SOFTWARE<br />
                    DEVELOPMENT
                </h1>
                <HorizontalBar width="100" />
                <p>
                    “Resolute devs” - is a team of professionals specializing in creating<br />
                    web applications with maximum speed and quality. We offer a full<br />
                    range of services for the development, maintenance, promotion of<br />
                    websites and software.
                </p>
            </div>
        </div>
    )
}