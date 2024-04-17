import LogoIcon from "../../assets/icons/LogoIcon"
import classes from "./Header.module.css"


export default function Header() {
    return (
        <header>
            <div className={classes.background}></div>
            <div className={classes.logo}>
                <LogoIcon />
            </div>
            <nav className={classes.navbar}>
                <ul>
                    <li>Services</li>
                    <li>Benefits</li>
                    <li>How we work</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )

}