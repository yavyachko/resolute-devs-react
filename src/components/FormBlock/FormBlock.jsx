import React, { useState } from "react";
import Form from "./Form";
import "./FormBlock.scss";
import CrossIconOutlined from "../../assets/icons/CrossIconOutlined"
import CheckIcon from "../../assets/icons/CheckIcon";
export default function FormBlock({ sectionRef }) {
  const [formStatus, setFormStatus] = useState("");

  const handleSending = (status) => {
    setFormStatus(status);
  };

  let StatusContent = () => {
    if (formStatus === "") {
      return <h3>READY TO GET YOUR NEXT LEVEL WEBSITE? LETS WORK TOGETHER!</h3>;
    } else if (formStatus === "success") {
      return (
      <>
      <CheckIcon />
      <p>Application successfully sent!</p>
      </>
    );
    } else {
      return (
        <>
          <CrossIconOutlined/>
          <p>Oooops... something went wrong, try again</p>
        </>
      );
    }
  };

  return (
    <section ref={sectionRef} className="formBlock">
      <h2>Contact us</h2>
      <div className="formBlock__content">
        <div className="formBlock__state">
          <StatusContent />
        </div>
        <Form setState={handleSending} />
      </div>
    </section>
  );
}
