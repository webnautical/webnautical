import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { quoteContext } from "../../../contexts/QuoteContext";
//components imports
import FirstComponent from "./first.stepComponents";
import ThirdStep from "./third.step.component";
import FourthStep from "./fourth.step.component";
import FinalStep from "./final.step.component";

//bootstrap imports
import { Container, Row, Col } from "react-bootstrap";
import { step1Data,step2Data } from "./first.stepComponents";

//images imports
import step1Icon from "../../../assets/button-navigation-images/step-icon-01.svg";
import step2Icon from "../../../assets/button-navigation-images/step-icon-02.svg";
import step3Icon from "../../../assets/button-navigation-images/step-icon-03.svg";
import step4Icon from "../../../assets/button-navigation-images/step-icon-04.svg";
import step5Icon from "../../../assets/button-navigation-images/step-icon-05.svg";



function FreeSteps(){
  const {trigger} = useContext(quoteContext)
  const stepItem = [
    {
        key: "firstStep",
        label: "Types of Service",
        isDone: true,
        component:<FirstComponent data={step1Data}/>,
        image:step1Icon,
        title:'Select the services are you looking for',
        validate:()=>{return(trigger('service'))}
    },
    {
        key: "secondStep",
        label: "Choose Budget",
        isDone: false,
        component:<FirstComponent data={step2Data}/>,
        image:step2Icon,
        title:'Choose Your Budget Range',
        validate:()=>{return(trigger('budget'))}
  
    },
    {
        key: "thirdStep",
        label: "Choose Budget",
        isDone: false,
        component:<ThirdStep/>,
        image:step3Icon,
        title:'Tell Us About You',
        validate:()=>{return(trigger(["fullName","email","phoneNo"]))}
    },
    {
        key: "FourthStep",
        label: "Choose Budget",
        isDone: false,
        component: <FourthStep/>,
        title:'Tell Us About Your Project',
        image:step4Icon,
        validate:()=>{return(trigger("requirements"))}

  
    },
    {
        key: "finalStep",
        label: "Choose Budget",
        isDone: false,
        title:'Attach a File',
        component: <FinalStep/>,
        image:step5Icon,
        submit:()=>{alert('form submit')}
    }
  ]
  const [steps, setSteps] = useState(stepItem);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if( activeStep.key ==='finalStep'){
      activeStep.submit();
      return
    }

    activeStep.validate()
    .then(res=>{
       if (res){
          const index = steps.findIndex((x) => x.key === activeStep.key);
          setSteps((prevStep) =>
            prevStep.map((x) => {
              if (x.key === activeStep.key) x.isDone = true;
              return x;
            })
          );
      
          setActiveStep(steps[index + 1]);
       }
  })
    

    
  };

  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };

  return (
    <section className="steps">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="all-steps">
              <ul className="tablist">
                {stepItem.map((step, i) => {
                  return (
                    <li
                      key={i}
                      className={`${
                        activeStep.key === step.key ? "active" : ""
                      } ${step.isDone ? "done" : ""}`}
                    >
                      <em>
                        <img src={step.image} alt={`${i}st step`} />
                      </em>
                      <div className="tablist-span-box">
                        <span>{i + 1}/5</span>
                        <span>
                          <strong>{step.label}</strong>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col sm={12}>
            <form action="" className="step-form">
            <h3>{activeStep.title}</h3>
              {activeStep.component}
            </form>
          </Col>
          <Col>
            <div className="btn-component pt-2 text-center">
              <input
                type="button"
                value="Previous"
                onClick={handleBack}
                disabled={steps[0].key === activeStep.key}
              />
              <input
                type="button"
                value={
                  steps[steps.length - 1].key !== activeStep.key
                    ? "Next"
                    : "Submit"
                }
                onClick={handleNext}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FreeSteps;

