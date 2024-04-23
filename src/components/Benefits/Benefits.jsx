import BenefitItem from "../BenefitItem/BenefitItem";
import classes from "./Benefits.module.scss"
import BulbIcon from '../../assets/icons/benefits/BulbIcon'
import UXIcon from '../../assets/icons/benefits/UXIcon'
import PenIcon from '../../assets/icons/benefits/PenIcon'
import ResultsIcon from '../../assets/icons/benefits/ResultsIcon'
import SupportIcon from '../../assets/icons/benefits/SupportIcon'

export default function Benefits({sectionRef}) {
    return (
        <section ref={sectionRef} className={classes["benefits"]}>
            <h2 className={classes["benefits__heading"]}>
                Benefits
            </h2>
            <div className={classes["benefits__content"]}>
                <BenefitItem
                    heading={"Customized Solutions"}
                    image={<BulbIcon/>}>
                    We understand that every business is unique. That's why we offer tailored solutions to meet your specific needs, ensuring your website reflects the essence of your brand.
                </BenefitItem>
                <BenefitItem
                    heading={"Seamless User Experience"}
                    image={<UXIcon/>}>
                    We prioritize usability in every project. By focusing on intuitive navigation and fast load times, we ensure a smooth experience for all your visitors.
                </BenefitItem>
                <BenefitItem
                    heading={"Cutting-Edge Design"}
                    image={<PenIcon/>}>
                    Our team of skilled designers and developers work hand-in-hand to craft visually stunning and user-friendly websites. We stay ahead of the latest trends to ensure your website stands out.
                </BenefitItem>
                <BenefitItem
                    heading={"Results-Driven Approach"}
                    image={<ResultsIcon/>}>
                    Our goal is to not just launch websites, but to create platforms that drive growth. From   responsive design to SEO optimization.
                </BenefitItem>
                <BenefitItem
                    heading={"Ongoing Support"}
                    image={<SupportIcon/>}>
                    Launching your website is just the beginning. We provide ongoing maintenance and support to keep your site up-to-date and performing at its best.
                </BenefitItem>
            </div>
        </section>
    )
}