import ServiceItem from "../ServiceItem/ServiceItem"
import TIcon from "../../assets/icons/services/TIcon"
import WordIcon from "../../assets/icons/services/WordIcon"
import AIIcon from "../../assets/icons/services/AIIcon"
import FigmaIcon from "../../assets/icons/services/FigmaIcon"
import PhotoshopIcon from "../../assets/icons/services/PhotoshopIcon"
import IllustratorIcon from "../../assets/icons/services/IllustratorIcon"
import HTMLIcon from "../../assets/icons/services/HTMLIcon"
import CSSIcon from "../../assets/icons/services/CSSIcon"
import JSIcon from "../../assets/icons/services/JSIcon"
import VueIcon from "../../assets/icons/services/VueIcon"
import PythonIcon from "../../assets/icons/services/PythonIcon"
import NodeIcon from "../../assets/icons/services/NodeIcon"
import PHPIcon from "../../assets/icons/services/PHPIcon"
import DockerIcon from "../../assets/icons/services/DockerIcon"
import ABCIcon from "../../assets/icons/services/ABCIcon"
import YandexMetrixIcon from "../../assets/icons/services/YandexMetrixIcon"
import GoogleAnalyticsIcon from "../../assets/icons/services/GoogleAnalytiscIcon.jsx"
import CubeIcon from "../../assets/icons/services/CubeIcon"
import classes from "./Services.module.css"
import ReactIcon from "../../assets/icons/services/ReactIcon.jsx"

export default function Services() {
    return (
        <div className={classes["services"]}>
            <h2 className={classes["services__header"]}>Our services</h2>
            <div className={classes["services__content"]}>
                <ServiceItem icons={[
                    <TIcon />,
                    <WordIcon />,
                    <AIIcon />
                ]}>
                    Copywriting
                </ServiceItem>
                <ServiceItem icons={[
                    <FigmaIcon />,
                    <PhotoshopIcon />,
                    <IllustratorIcon />
                ]}>
                    UI/UX Design
                </ServiceItem>
                <ServiceItem icons={[
                    <HTMLIcon />,
                    <CSSIcon />,
                    <JSIcon />,
                    <VueIcon />,
                    <ReactIcon />
                ]}>
                    Front-end
                </ServiceItem>
                <ServiceItem icons={[
                    <PythonIcon />,
                    <NodeIcon />,
                    <PHPIcon />
                ]}>
                    Back-end
                </ServiceItem>

                <ServiceItem icons={[
                    <YandexMetrixIcon />,
                    <GoogleAnalyticsIcon />,
                    <AIIcon />]}>
                    Seo
                </ServiceItem>

                <ServiceItem icons={[
                    <DockerIcon />,
                    <CubeIcon />,
                    <ABCIcon />]}>
                    Deployment
                </ServiceItem>
            </div>
        </div>
    )
}