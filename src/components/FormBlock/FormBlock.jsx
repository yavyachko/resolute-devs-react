import React from "react";
import Form from "./Form";
import "./FormBlock.scss"
export default function FormBlock({sectionRef}) {
  return (
    <section ref={sectionRef} className="formBlock">
      <h2>Contact us</h2>
      <div className="formBlock__content">
        <div className="formBlock__state">
            <h3>READY TO GET YOUR NEXT LEVEL WEBSITE? LETS WORK TOGETHER!</h3>
        </div>
        <Form />
      </div>
    </section>
  );
}
