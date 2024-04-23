import VerticalBar from "../../assets/icons/VerticalBar"
import HorizontalBar from "../../assets/icons/HorizontalBar"
import classes from "./WebIntro.module.scss"
import "./WebIntro.module.scss"

export default function WebIntro() {
    return (
        <div className={classes.heading} id="main">
            <div className={classes['heading--left']}>
                <p>LET US BUILD <span>YOUR DREAM</span></p>
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