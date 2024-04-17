import BenefitItem from "../BenefitItem/BenefitItem";

export default function Benefits() {
    return (
        <section className="benefits">
            <h2 className="benefits__heading">
                Benefits
            </h2>
            <div className="benefits__content">
                <BenefitItem
                    heading={"Cutting-Edge Design"}
                    number={"01"}>
                    Our team of skilled designers and developers work hand-in-hand to craft visually stunning and user-friendly websites. We stay ahead of the latest trends to ensure your website stands out.
                </BenefitItem>
                <BenefitItem
                    heading={"Customized Solutions"}
                    number={"02"}>
                    We understand that every business is unique. That's why we offer tailored solutions to meet your specific needs, ensuring your website reflects the essence of your brand.
                </BenefitItem>
                <BenefitItem
                    heading={"Results-Driven Approach"}
                    number={"03"}>
                    Our goal is to not just launch websites, but to create platforms that drive growth. From   responsive design to SEO optimization.
                </BenefitItem>
                <BenefitItem
                    heading={"Seamless User Experience"}
                    number={"04"}>
                    We prioritize usability in every project. By focusing on intuitive navigation and fast load times, we ensure a smooth experience for all your visitors.
                </BenefitItem>
                <BenefitItem
                    heading={"Ongoing Support"}
                    number={"05"}>
                    Launching your website is just the beginning. We provide ongoing maintenance and support to keep your site up-to-date and performing at its best.
                </BenefitItem>
                
            </div>
        </section>
    )
}