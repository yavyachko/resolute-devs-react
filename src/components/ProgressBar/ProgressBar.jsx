import OfferIcon from "../../assets/icons/progress-bar/OfferIcon.jsx";
import DevelopmentIcon from "../../assets/icons/progress-bar/DevelopmentIcon.jsx";
import DesignIcon from "../../assets/icons/progress-bar/DesignIcon.jsx";
import PrototypeIcon from "../../assets/icons/progress-bar/PrototypeIcon.jsx";
import ResearchIcon from "../../assets/icons/progress-bar/ResearchIcon.jsx";
import ReadyIcon from "../../assets/icons/progress-bar/ReadyIcon.jsx";

import OfferIllustration from "../../assets/icons/OfferIllustration.jsx";
import ResearchIllustration from "../../assets/icons/ResearchIllustration";
import PrototypeIllustration from "../../assets/icons/PrototypeIllustration";
import DesignIllustration from "../../assets/icons/DesignIllustration";
import DevelopmentIllustration from "../../assets/icons/DevelopmentIllustration";
import ReadyIllustration from "../../assets/icons/ReadyIllustration";
import ProgressBarItem from "../ProgressBarItem/ProgressBarItem.jsx";
import DashLine from "../../assets/icons/progress-bar/DashLine.jsx";
import classes from "./ProgressBar.module.scss";
import { useEffect, useState } from "react";

export default function ProgressBar({ sectionRef }) {
  const [progressWidth, setProgressHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = sectionRef.current;
      const { top, height } = targetElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPercentage =
        ((windowHeight - top) / (windowHeight + height  - 162)) * 100;
      setProgressHeight(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className={classes["progressBar"]}>
      <h2 className={classes["progressBar__heading"]}>How we work</h2>
      <div className={classes["progressBar__content"]}>
        <ProgressBarItem
          heading={"Offer"}
          icon={<OfferIcon />}
          illustration={<OfferIllustration />}
        >
          We receive your application, then we contact you, discuss the project
          details, your preferences, and expectations. After agreeing on the
          details, we formalize the offer.
        </ProgressBarItem>
        <ProgressBarItem
          heading={"Research"}
          icon={<ResearchIcon />}
          illustration={<ResearchIllustration />}
        >
          We conduct a comprehensive analysis of your specific business area,
          taking into account market trends, customer preferences, and industry
          dynamics.
        </ProgressBarItem>
        <ProgressBarItem
          heading={"Prototype"}
          icon={<PrototypeIcon />}
          illustration={<PrototypeIllustration />}
        >
          At this stage, we turn the idea into an interactive prototype and
          present it to you. The prototype helps visualize the structure and
          interaction of elements on the website.
        </ProgressBarItem>
        <ProgressBarItem
          heading={"Design"}
          icon={<DesignIcon />}
          illustration={<DesignIllustration />}
        >
          At this stage, we implement the ideas into a visual appearance. Design
          is not only aesthetics, but also functionality. We strive to create an
          user-friendly interface.
        </ProgressBarItem>
        <ProgressBarItem
          heading={"Development"}
          icon={<DevelopmentIcon/>}
          illustration={<DevelopmentIllustration />}
        >
          At this stage, our team of web developers brings all the previous
          stages to life. We meticulously write code, implementing the design
          and functionality of the website or web application.
        </ProgressBarItem>
        <ProgressBarItem
          heading={"Ready"}
          icon={<ReadyIcon />}
          illustration={<ReadyIllustration />}
        >
          We complete the development and prepare the project for launch. After
          the successful completion of this stage, we hand over the finished
          solution to the client.
        </ProgressBarItem>
        <div
          className={classes["progressPath"]}
          style={{ height: `${progressWidth}%` }}
        >
          <DashLine />
        </div>
      </div>
    </section>
  );
}
